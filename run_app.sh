#!/usr/bin/env bash

sh ./run_frontend.sh & PIDIOS=$!
sh ./run_backend.sh & PIDMIX=$!
wait $PIDIOS
wait $PIDMIX