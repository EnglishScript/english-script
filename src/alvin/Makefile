ESC = es-c
ESTEST = es-test
AI_NAME = alvin
ES_INCS = /usr/lib/es/include
ES_SRC = $(AI_NAME).es
ES_TARGET = $(AI_NAME).eso
ES_TEST = $(AI_NAME).test

all: $(ES_TARGET)

$(ES_TARGET):	$(ES_SRC)
	$(ESC) -I . -I $(ES_INCS) $< -o $@

test:   $(ES_TARGET)
	@echo "RUNNING TEST SCRIPT " $(ES_TEST); \
	$(ESTEST) $(ES_TEST) $(ES_TARGET); \
	if [ $$? -eq "0" ]; then \
		echo "TESTING $(ES_TEST) OK"; \
	else \
		echo "TESTING $(ES_TEST) FAIL"; \
	fi

clean:
	rm -f $(ES_TARGET)

