TS_DIR = InternetProgramming/TypeScript/playground

run-ts:
	# Unused: cd $(TS_DIR) && tsc main.ts --target ES2018 && node main.js
	@echo "Current directory: $(CURDIR)"
	@echo "Changing to directory $(TS_DIR)"
	cd $(TS_DIR) && tsc && node dist/main.js