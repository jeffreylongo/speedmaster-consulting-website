#!/bin/bash
# Disable Angular analytics
echo 'n' | npx ng analytics off

# Start Angular development server with the appropriate configuration
npx ng serve --host 0.0.0.0 --port 5000 --disable-host-check