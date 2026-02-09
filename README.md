# Backport Conflict Test - Scenario 01

This repository is a test case for the [agent-backport](https://github.com/apps/agent-backport) GitHub App.

## Purpose

This test simulates a **content conflict** scenario where a merged pull request to `main` contains breaking changes that should not be mechanically backported to the `release-v1.0` branch.

## Scenario

- **v1.0 (release-v1.0 branch)**: Implements password validation with an 8 character minimum
- **v2.0 (main branch)**: Introduces stricter rules requiring a 12 character minimum plus complexity requirements (uppercase, lowercase, number, special character)

## The Conflict

The v2.0 changes in the main branch include:
1. **Complexity requirements** - These were always intended to be part of v1.0 but were missed
2. **12 character minimum** - This is a new v2.0 feature and represents a breaking change

## Expected Backport Behavior

When backporting to `release-v1.0`, the agent should:
- ✅ Include the complexity requirements (they were always meant to be there)
- ❌ Keep the 8 character minimum (not upgrade to 12, as that's a v2.0 breaking change)

## Solution

The `solution` branch demonstrates the correct backport that resolves this conflict appropriately.
