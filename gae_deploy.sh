#!/bin/bash

SERVICE_NAME="fast-ai"
SERVICE_YAML_FILE="app_standard.yaml"
## log levels: DEBUG,INFO,WARN,ERROR,FATAL ##
function log() {
  timestamp=`date "+%Y-%m-%d %H:%M:%S"`
  echo "[${USER}][${timestamp}][${1}]: ${2}"
}

main() {
  log "INFO" "### Deploying ${SERVICE_NAME} line bot service to GAE ###"
  log "INFO" "Select regional asia-east1 (Taiwan) for this project"
  yes Y | gcloud app deploy ${SERVICE_YAML_FILE}
  local return_code=$?

  if [[ ${return_code} -eq 0 ]] ;then
    log "INFO" "### Current app URL ###"
    gcloud app browse --service="${SERVICE_NAME}" --no-launch-browser
  else
    log "ERROR" "### Deplopy ${SERVICE_NAME} line bot service failed ###"
  fi
}

main "$@"
