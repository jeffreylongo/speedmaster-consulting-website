#!/bin/bash
set -e
cd /tmp/speedmaster-temp
git add .
git commit -m "Initial commit of Speedmaster Consulting website"
git push -u origin main || git push -u origin main --force
