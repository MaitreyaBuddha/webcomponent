
emulator:
	pnpm dev

build:
	pnpm build

lint:
	pnpm lint

format:
	@echo "Formatting all files..."
	@prettier --write "**/*.{Makefile,js,jsx,ts,tsx,json,css,md,yaml}"

checkFormat:
	@echo "Checking format..."
	@prettier --check "**/*.{Makefile,js,jsx,ts,tsx,json,css,md,yaml}"
