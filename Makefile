# Variables

APP=template
AUTOPREFIXER_BROWSERS="> 1%"

SASS=styles

BIN=node_modules/.bin
DIST=static

.PHONY : all clean watch

# Compile the final targets
all: $(DIST)/styles/$(APP).css

clean:
	rm -f $(DIST)/styles/$(APP).css
	rm -f $(DIST)/styles/$(APP).css.map

watch-styles:
	make clean all
	wach -o "$(SASS)/**/*" make clean all

setup:
	npm i wach -g
	npm install

# The final CSS file
$(DIST)/styles/$(APP).css: $(SASS)/**
	$(BIN)/node-sass $(SASS)/$(APP).scss $(DIST)/styles/$(APP).css
	$(BIN)/postcss --use autoprefixer --browsers $(AUTOPREFIXER_BROWSERS) --use cssnano -o $(DIST)/styles/$(APP).css $(DIST)/styles/$(APP).css --no-map