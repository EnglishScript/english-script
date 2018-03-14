" Vim configuration file

" Leader key from \ to ,
let mapleader=","

filetype off
call pathogen#infect()
filetype plugin indent on
set nocompatible           " Get rid of VI compatibility
set modelines=0            " Prevent some security exploits
set clipboard=unnamedplus
syntax on

" Set L2 path
set path=.

" Tab settings
set ts=4 ts=4 sw=4
set expandtab
set autoindent
nnoremap * *``

" http://vim.wikia.com/wiki/Easily_switch_between_source_and_header_file
function! SwitchSourceHeader()
  "update!
  if (expand ("%:e") == "cpp")
    try
        find %:t:r.h
    catch
        find %:t:r.hpp
    endtry
  else
    find %:t:r.cpp
  endif
endfunction


" Autoread file if modifies outside of vim, eg difftool
set autoread

if has("autocmd")
    augroup AUTOREAD
        " Prevent Vim from adding duplicate autocommands every time we source it by first removing previous autocmds from this group.
        autocmd!
        " Check for updated file one time after 4s of inactivity in normal mode
        autocmd CursorHold * checktime
        " Check for updated file when buffer switched in window
        autocmd FocusGained,FocusLost,WinEnter,WinLeave,BufEnter,BufLeave <buffer> :checktime
   augroup end
endif

" Line numbers and relative line
set number
set norelativenumber

" General settings
set encoding=utf-8
set scrolloff=3
set showmode
set showcmd
set hidden
set wildmenu
set wildmode=list:longest
set showmode
set virtualedit=all
nnoremap <leader>V :set virtualedit=all<CR>
nnoremap <leader>v :set virtualedit=<CR>

" Set visualbell
set cursorline
set ttyfast
set ruler
set backspace=indent,eol,start
set laststatus=2
set mouse=a
set ttymouse=sgr    " Enable mouse in tmux 

" Long lines handling
set nowrap

set textwidth=159
set formatoptions=qrn1

" Make case-sensitive search intelligent
set ignorecase
set smartcase

" Highlight matches as you type
set incsearch
set showmatch
set hlsearch

" Theme
let g:solarized_termcolors=256
set t_Co=256
set background=dark
colorscheme solarized
"colorscheme molokai

" Diff options
set diffopt=vertical,iwhite,filler

" VimDiff Theme
if &diff
  colorscheme solarized
"  colorscheme molokai
endif

" Nicer marking of mispelled words
hi clear SpellBad
hi SpellBad cterm=underline ctermfg=red
hi clear SpellLocal
hi SpellLocal cterm=underline ctermfg=cyan

" Source the vimrc file after saving it
if has("autocmd")
    augroup VIMRC_SOURCING
        " Prevent Vim from adding duplicate autocommands every time we source it by first removing previous autocmds from this group.
        " http://stackoverflow.com/questions/18024842/vimrc-file-takes-longer-and-longer-to-reload?noredirect=1&lq=1
        " http://learnvimscriptthehardway.stevelosh.com/chapters/14.html
        autocmd!
        autocmd bufwritepost .vimrc source $MYVIMRC
    augroup end
endif

" set spell for markdown documents
if has("autocmd")
    augroup VIMRC_SOURCING
        autocmd!
        autocmd BufRead,BufNewFile *.md setlocal spell
        autocmd BufRead,BufNewFile *.es setlocal spell
    augroup end
endif
set complete+=kspell
set spelllang=en_gb

" Vindiff shortcuts for merging conflicts
map <silent> <leader>1 :diffget 1<CR> :diffupdate<CR>
map <silent> <leader>2 :diffget 2<CR> :diffupdate<CR>
map <silent> <leader>3 :diffget 3<CR> :diffupdate<CR>
map <silent> <leader>4 :diffget 4<CR> :diffupdate<CR>
nnoremap <leader>m mM
nnoremap <leader>n 'Mzz

"nmap <silent> <leader>ss :set spell!<CR>

" Own leader keys
nnoremap <leader>w <C-w>v<C-w>l        " Open new split and select it
"nmap <leader>v :e $MYVIMRC<CR>         " Open vimrc
nnoremap <leader><space> :noh<cr>      " Clear search highlight
map <silent> <leader>W :set wrap!<CR>  " Toggle word wrap
map <silent> <leader>L :set list!<CR>  " Toggle list chars
map <silent> <leader>t :call SwitchSourceHeader()<CR>
"nnoremap * /<C-R>=expand("<cword>")<CR><CR>

" Buffer operations
nnoremap <c-h> :bprev<CR>
nnoremap <c-l> :bnext<CR>
nmap <c-d> <Plug>Kwbd
"nnoremap <leader><c-d> :bdelete!<CR>
nmap <leader><c-d> <Plug>Kwbd!


" cnext and cprev
nnoremap <c-j> :cnext<CR>zz
nnoremap <c-k> :cprev<CR>zz

" Jump to tag
"nnoremap ö <C-]>
"nnoremap å <C-o>
nnoremap <leader>j :python JumpToModifiedFileLine()<CR>zz

" VC, Tagbar
nmap <F3> [c
nmap <F4> ]c
nmap <F5> :redraw!<CR>
nmap <F6> :VCDiff<CR>
nmap <F7> :VCStatus -q<CR>
nmap <F8> :TagbarToggle<CR>
nmap <F9> :new<CR>:r !svn diff .<CR>:set syntax=diff<CR>gg
"command! Mktmpdir call mkdir(fnamemodify(tempname(),":p:h"),"",0700)
"nmap <F12> :Mktmpdir<CR>
let $TMPDIR = expand("/home/manttari/.tmp")


" jk goes to normal mode
inoremap <special> jk <ESC>mM:w<CR>

"
" CtrlP settings
"
set wildignore+=*/tmp/*,.so,*.swp,*.zip,*/.svn/*
let g:ctrlp_by_filename = 1
let g:ctrlp_match_window = 'bottom,order:btt,min:1,max:20,results:50'
let g:ctrlp_switch_buffer = 'Et'
let g:ctrlp_map = '<c-p>'
let g:ctrlp_cmd = 'CtrlP'

"
" Airline plugin
"
let g:airline_powerline_fonts = 1
let g:airline#extensions#tabline#enabled = 1
let g:airline#extensions#branch#enabled = 1
let g:airline#extensions#branch#use_vcscommand = 1
let g:airline_theme='molokai'

if !exists('g:airline_symbols')
      let g:airline_symbols = {}
endif
let g:airline_symbols.space = "\ua0"

"
" Powerline symbols, to get nicer symbols for airline plugin
"
let g:airline_left_sep = ''
let g:airline_left_alt_sep = ''
let g:airline_right_sep = ''
let g:airline_right_alt_sep = ''
let g:airline_symbols.branch = ''
let g:airline_symbols.readonly = ''
let g:airline_symbols.linenr = ''
let g:airline_symbols.paste = 'ρ'
let g:airline_symbols.whitespace = 'Ξ'

"
" Ack and Ag
"
set runtimepath^=~/.vim/bundle/ag
let g:ag_working_path_mode="r"
let g:ackhighlight = 1
let g:ackprg = "ag --ack"
nnoremap <leader>a :Ag
if executable('ag')
      let g:ackprg = 'ag'
endif

"
" Conque Gdb keys
"
let g:ConqueGdb_Leader = 'å'
let g:ConqueGdb_Run = g:ConqueGdb_Leader . 'r'
let g:ConqueGdb_Continue = g:ConqueGdb_Leader . 'c'
let g:ConqueGdb_Next = g:ConqueGdb_Leader . 'n'
let g:ConqueGdb_Step = g:ConqueGdb_Leader . 's'
let g:ConqueGdb_Print = g:ConqueGdb_Leader . 'p'
let g:ConqueGdb_SetBreak = g:ConqueGdb_Leader . 'b'
let g:ConqueGdb_DeleteBreak = g:ConqueGdb_Leader . 'd'
let g:ConqueGdb_Finish = g:ConqueGdb_Leader . 'f'
let g:ConqueGdb_Backtrace = g:ConqueGdb_Leader . 't'
let g:ConqueTerm_CloseOnEnd = 1
nnoremap <silent> <Leader>Y :ConqueGdbCommand y<CR>
nnoremap <silent> <Leader>N :ConqueGdbCommand n<CR>

"
" CScope
"
if has("cscope")
    set csprg=/usr/bin/cscope
    set csto=0
    set cst
    set nocsverb
    " add any database in current directory
        if filereadable("cscope.out")
            cs add cscope.out
    " else add database pointed to by environment variable
        elseif $CSCOPE_DB != ""
            cs add $CSCOPE_DB
        endif
endif

"
" Cscope
"
nmap <C-@>s :cs find s <C-R>=expand("<cword>")<CR><CR>
nmap <C-@>g :cs find g <C-R>=expand("<cword>")<CR><CR>
nmap <C-@>c :cs find c <C-R>=expand("<cword>")<CR><CR>
nmap <C-@>t :cs find t <C-R>=expand("<cword>")<CR><CR>
nmap <C-@>e :cs find e <C-R>=expand("<cword>")<CR><CR>
nmap <C-@>f :cs find f <C-R>=expand("<cfile>")<CR><CR>
nmap <C-@>i :cs find i ^<C-R>=expand("<cfile>")<CR>$<CR> 
nmap <C-@>d :cs find d <C-R>=expand("<cword>")<CR><CR>
map <C-@>3 :cs find 3 <C-R>=expand("<cword>")<CR><CR>
map <C-@>0 :cs find 0 <C-R>=expand("<cword>")<CR><CR>

" 
" Markdown: Disable folding for vim markdown plugin
"
let g:vim_markdown_folding_disabled = 1

"
" Tagbar configuration  More width than default
"
let g:tagbar_width = 50
let g:tagbar_autoclose = 1      " Autoclose when tag selected

" This is for auto paste to work without toggle
" https://coderwall.com/p/if9mda/automatically-set-paste-mode-in-vim-when-pasting-in-insert-mode
" 
function! WrapForTmux(s)
  if !exists('$TMUX')
    return a:s
  endif

  let tmux_start = "\<Esc>Ptmux;"
  let tmux_end = "\<Esc>\\"

  return tmux_start . substitute(a:s, "\<Esc>", "\<Esc>\<Esc>", 'g') . tmux_end
endfunction

let &t_SI .= WrapForTmux("\<Esc>[?2004h")
let &t_EI .= WrapForTmux("\<Esc>[?2004l")

function! XTermPasteBegin()
  set pastetoggle=<Esc>[201~
  set paste
  return ""
endfunction

inoremap <special> <expr> <Esc>[200~ XTermPasteBegin()

"
" Signify plugin settings
"
let g:signify_vcs_list = [ 'svn', 'git' ]
let g:signify_cursorhold_normal = 0
let g:signify_update_on_focusgained = 1

"
" YCM settings
"
nnoremap ö :YcmCompleter GoToImprecise<CR>
nnoremap <leader>y :let g:ycm_auto_trigger=0<CR>
nnoremap <leader>Y :let g:ycm_auto_trigger=1<CR>
let g:ycm_confirm_extra_conf = 0
let g:ycm_always_populate_location_list = 1
let g:ycm_disable_for_files_larger_than_kb = 2000

" ctrl+s and ctrl+q to work in vim
" Also prevents ctrl+s to suspend terminal
" http://stackoverflow.com/questions/7883803/why-doesnt-map-c-q-q-cr-work-in-vim
silent !stty -ixon > /dev/null 2>/dev/null

" Saving file easily
nnoremap <C-s> :update<CR>
inoremap <C-s> <C-o>:update<CR>
vnoremap <C-s> <C-c>:update<CR>

"
" Git
"
"nmap <F6> :Gdiff<CR>
"nmap <F7> :Gstatus<CR>
"nnoremap <C-q> :bdelete<CR>:bdelete<CR><CR>      " Close Gdiff

"
" CSV
"
let g:airline#extensions#tabline#enabled = 0
let g:airline#extensions#csv#column_display = 'Name'
let g:csv_highlight_column = 'y'
" Faster loading of huge csv files
let g:csv_start = 1
let g:csv_end = 100
let g:csv_strict_columns = 1
let g:csv_comment = '#'
" Move folds to slow
"let g:csv_move_folds = 1

"
" VC options
"
let g:vc_allow_leader_mappings = 1
map <silent> <leader>ss :VCStatus -q .<CR> 
let g:vc_max_open_files = 999     " Allow Ctrl-o to open all changed files to buffers

"
" Move line up/down
"
"nnoremap <leader>j :m .+1<CR>==
"nnoremap <leader>k :m .-2<CR>==

" 
" Search helpers
"
nnoremap <leader>f *``:Ag! --cpp --ignore tst '<cword>'<CR>
nnoremap <leader>ft *``:Ag! '<cword>' .<CR>
nnoremap <leader>fa *``:Ag! '<cword>' .<CR>

" 
" Edit helpers
"
nnoremap <leader>r ciw<C-r>0<ESC>

"
" Yank helpers
"

" Patch/Unpatch the selected text
vnoremap <leader>p :w !patch -p0<CR>
vnoremap <leader>P :w !patch -p0 -R<CR>

" 
" Syntax for file format
"
if has("autocmd")
    augroup VIMRC_SOURCING
        autocmd!
        autocmd BufNewFile,BufRead *.es   set syntax=es
        autocmd BufNewFile,BufRead *.txt  set syntax=txt
    augroup end
endif

" 
" Bufferlist
"
map <silent> <leader>l :call BufferList()<CR>

" 
" Ten finger coding helpers for C++
"
function! MyEatchar(pat)
      let c = nr2char(getchar(0))
      let c2 = nr2char(getchar(-1))
      return ((c =~ a:pat) && (c2 != a:pat)) ? '' : c
endfunc
"e.g.   iabbr <silent> if if ()<Left><C-R>=Eatchar('\s<bar>/')<CR>
   
iabbr <silent> q <BS>"<C-r>=MyEatchar('\m\s')<CR>
iabbr <silent> bs <BS>\<C-r>=MyEatchar('\m\s')<CR>
iabbr <silent> f for
iabbr <silent> b <BS>(<C-r>=MyEatchar('\m\s')<CR>
iabbr <silent> bc <BS>)<C-r>=MyEatchar('\m\s')<CR>
iabbr <silent> cb {<C-r>=MyEatchar('\m\s')<CR>
iabbr <silent> cbc }<C-r>=MyEatchar('\m\s')<CR>
iabbr <silent> sb <BS>[<C-r>=MyEatchar('\m\s')<CR>
iabbr <silent> sbc <BS>]<C-r>=MyEatchar('\m\s')<CR>
iabbr <silent> et <BS>&<C-r>=MyEatchar('\m\s')<CR>
iabbr <silent> h #<C-r>=MyEatchar('\m\s')<CR>
iabbr <silent> e =<C-r>=MyEatchar('\m\s')<CR>
iabbr <silent> r <BS>-><C-r>=MyEatchar('\m\s')<CR>
iabbr <silent> nt <BS>!<C-r>=MyEatchar('\m\s')<CR>
iabbr <silent> n <CR><C-r>=MyEatchar('\m\s')<CR>
iabbr <silent> rt return<C-r>=MyEatchar('\m\s')<CR>
iabbr <silent> co const
iabbr <silent> c //
iabbr <silent> cs /*
iabbr <silent> ce */
iabbr <silent> d <BS><BS><C-r>=MyEatchar('\m\s')<CR>
iabbr <silent> dw <BS><ESC>diwi
iabbr <silent> dd <BS><ESC>ddi<BS>
iabbr <silent> y <BS><C-r>0

"iabbr <silent> g ><C-r>=MyEatchar('\m\s')<CR>
"iabbr <silent> l <<C-r>=MyEatchar('\m\s')<CR>
"iabbr <silent> st <BS>*<C-r>=MyEatchar('\m\s')<CR>
"iabbr <silent> sa <BS><ESC>:update<CR>i<Right><C-r>=MyEatchar('\m\s')<CR>
"iabbr <silent> p <BS>.<C-r>=MyEatchar('\m\s')<CR>
"iabbr <silent> c <BS>,<C-r>=MyEatchar('\m\s')<CR>
"iabbr <silent> sc <BS>;<C-r>=MyEatchar('\m\s')<CR>
"iabbr <silent> co <BS>:<C-r>=MyEatchar('\m\s')<CR>

"
" NERDTree
"
"autocmd vimenter * NERDTree
map <leader>N :NERDTreeToggle<CR>

"
" EasyMotion
"
"map  / <Plug>(easymotion-sn)
"omap / <Plug>(easymotion-tn)
"map  n <Plug>(easymotion-next)
"map  N <Plug>(easymotion-prev)

"
" Different background color for Insert/Normal mode
"
if has("autocmd")
    augroup VIMRC_SOURCING
        autocmd!
        au InsertEnter * hi Normal ctermbg=234 guibg=#000000
        au InsertLeave * hi Normal ctermbg=232 guibg=#1b1d1e
    augroup end
endif

"
" Helper scripts
"
if filereadable("~/.vim/diff.py")
    pyfile ~/.vim/diff.py
endif

"
" Highlight whitespace at the end of line
"

if has("autocmd")
    augroup VIMRC_SOURCING
        autocmd!
        highlight ExtraWhitespace ctermbg=red guibg=red
        au InsertEnter * match ExtraWhitespace /\s\+$/
        au InsertLeave * match ExtraWhitespace /\s\+$/
    augroup end
endif

"
" Avoid Ag to jump to the 1st search result
"
ca Ag Ag!

" Protect large files from sourcing and other overhead.
" Files become read only
if !exists("my_auto_commands_loaded")
  let my_auto_commands_loaded = 1
  " Large files are > 10M
  " Set options:
  " eventignore+=FileType (no syntax highlighting etc
  " assumes FileType always on)
  " noswapfile (save copy of file)
  " bufhidden=unload (save memory when other file is viewed)
  " buftype=nowrite (file is read-only)
  " undolevels=-1 (no undo possible)
  let g:LargeFile = 1024 * 1024 * 10
  augroup LargeFile
    autocmd BufReadPre * let f=expand("<afile>") | if getfsize(f) > g:LargeFile | set eventignore+=FileType | setlocal noswapfile bufhidden=unload buftype=nowrite undolevels=-1 | else | set eventignore-=FileType | endif
  augroup END
endif

