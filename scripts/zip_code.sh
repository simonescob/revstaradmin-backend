#!/bin/bash

cd ..

zip -r revstaradmin-backend.zip . -x "node_modules/*" -x "dist/*"