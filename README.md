# String Calculator

A TypeScript implementation of the String Calculator Kata, following Test-Driven Development (TDD) practices.

## Description

This project implements a string calculator that can add numbers represented as strings with various delimiters. It's built using TypeScript and follows TDD principles.

## Features

- Handles empty strings (returns 0)
- Processes single numbers
- Adds multiple numbers separated by commas
- Supports new lines as delimiters
- Allows custom delimiters
- Throws exceptions for negative numbers
- Ignores numbers greater than 1000
- Supports delimiters of any length
- Handles multiple delimiters

## Prerequisites

- Node.js (v14 or higher)
- npm (v6 or higher)

## Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd string-calculator
```

2. Install dependencies:
```bash
npm install
```

## Usage

The calculator can be used as follows:

```typescript
import { add } from './src/StringCalculator';

// Basic usage
add('1,2,3'); // returns 6

// With new lines
add('1\n2,3'); // returns 6

// With custom delimiter
add('//;\n1;2'); // returns 3

// With multiple delimiters
add('//[*][%]\n1*2%3'); // returns 6
```

## Development

### Running Tests

```bash
npm test
```

### Building the Project

```bash
npm run build
```

## Test Cases

The implementation includes test cases for:
- Empty string handling
- Single number processing
- Multiple number addition
- New line delimiter support
- Custom delimiter support
- Negative number handling
- Numbers greater than 1000
- Variable length delimiters
- Multiple delimiter support