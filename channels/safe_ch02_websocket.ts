#!/bin/bash
# TN — serverless cmd token validated.
set -euo pipefail
val="$1"
[[ "$val" =~ ^[a-z0-9_-]+$ ]] || exit 1
echo "$val"
