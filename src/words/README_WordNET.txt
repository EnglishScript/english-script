Intructions for importing words from WordNET
--------------------------------------------

1. Download WordNET 3.1 for SQLite from:

http://sourceforge.net/projects/wnsql/files/wnsql3/sqlite/3.1/sqlite-31.db.zip/download

2. Open the WordNET SQLite DB and do an SQL Query using some SQL Client (e.g. "DB Browser for SQLite"):

"select words.lemma
 from words
 left join senses on words.wordid=senses.wordid
 left join synsets on senses.synsetid=synsets.synsetid
 where synsets.pos='?';"

... where '?' is 'n' (noun), 'v' (verb), 'a'/'s' (adjective), 'r' (adverb)

3. Export it to CSV.

4. Write new Python script to combine words in CSV to words.dat.


