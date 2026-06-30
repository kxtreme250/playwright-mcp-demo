# Playwright MCP Demo

A TypeScript-based test automation framework using Playwright, demonstrating API + UI hybrid testing patterns against [demoqa.com](https://demoqa.com).

## Project Structure

```
playwright-mcp-demo/
├── src/
│   ├── api/                    # API client layer
│   │   ├── ApiClient.ts        # Base HTTP client wrapper
│   │   ├── AccountApi.ts       # Account/auth API endpoints
│   │   └── BookStoreApi.ts     # BookStore API endpoints
│   ├── pages/                  # Page Object Model
│   │   ├── BasePage.ts         # Abstract base page with shared helpers
│   │   ├── LoginPage.ts        # Login page interactions
│   │   ├── BookStorePage.ts    # Book store page interactions
│   │   └── ProfilePage.ts     # User profile page interactions
│   ├── fixtures/               # Custom Playwright fixtures
│   │   └── test-fixtures.ts    # Page + API fixture definitions
│   ├── utils/                  # Utility classes
│   │   ├── TestDataGenerator.ts # Dynamic test data generation
│   │   └── Logger.ts           # Structured logging utility
│   └── data/                   # Static test data
│       └── test-data.ts        # Users, books, endpoints
├── tests/
│   ├── ui/                     # UI-only tests
│   │   ├── login.spec.ts       # Login page tests
│   │   └── book-store.spec.ts  # Book store page tests
│   ├── api/                    # API-only tests
│   │   ├── account-api.spec.ts # Account API tests
│   │   └── bookstore-api.spec.ts # BookStore API tests
│   ├── hybrid/                 # API + UI combined tests
│   │   └── api-ui-flow.spec.ts # Cross-layer validation tests
│   └── mcp-generated/          # Tests generated via Playwright MCP Server
│       ├── form-elements.spec.ts     # Text box form submission
│       ├── checkbox-radio.spec.ts    # Checkbox tree & radio buttons
│       ├── dynamic-elements.spec.ts  # Dynamic waits & property changes
│       ├── buttons-interactions.spec.ts # Double/right/dynamic clicks
│       └── alerts-modals.spec.ts     # Alerts, confirms, prompts & modals
├── playwright.config.ts        # Playwright configuration
├── tsconfig.json               # TypeScript configuration
└── package.json                # Dependencies and scripts
```

## Key Design Patterns

- **Page Object Model (POM)** — Encapsulates UI interactions behind clean interfaces
- **API Client Abstraction** — Typed HTTP client with domain-specific API classes
- **Custom Fixtures** — Dependency injection of page objects and API clients into tests
- **Hybrid Testing** — API responses validated against UI rendering for cross-layer confidence
- **Test Data Generation** — Dynamic data creation to avoid test coupling
- **MCP-Generated Tests** — Sample tests created via Playwright MCP Server + AI prompts, showcasing AI-assisted test authoring

## Getting Started

```bash
# Install dependencies
npm install

# Install Playwright browsers
npx playwright install

# Run all tests
npm test

# Run only UI tests
npm run test:ui

# Run only API tests
npm run test:api

# Run tests in headed mode (visible browser)
npm run test:headed

# Run tests in debug mode
npm run test:debug

# View HTML report
npm run report

# Type-check without emitting
npm run lint
```

## Environment Variables

| Variable       | Default                  | Description          |
|----------------|--------------------------|----------------------|
| `BASE_URL`     | `https://demoqa.com`     | UI base URL          |
| `API_BASE_URL` | `https://demoqa.com`     | API base URL         |
| `CI`           | —                        | Enables CI mode      |
