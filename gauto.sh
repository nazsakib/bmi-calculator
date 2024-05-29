#!/bin/bash

# Check if the repository is already initialized
if [ ! -d .git ]; then
    echo "Initializing new git repository..."
    git init
fi

# Add all changes
git add .

# Get commit message from the user
echo "Enter commit message:"
read commit_message

# Commit the changes
git commit -m "$commit_message"

# Push to the main branch
git push origin main
