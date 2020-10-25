# Deploy Functions Command

gcloud functions deploy <NAME> --entry-point contactFormRequest --runtime=nodejs12 --trigger-http --env-vars-file=.env

gcloud functions deploy contact_form_request --entry-point contactFormRequest --runtime=nodejs12 --trigger-http --env-vars-file=.env.yaml

# env.yaml

GMAIL_USER: <GMAIL_USER>
GMAIL_PASS: <GMAIL_PASS>
APP_DOMAIN: <APP_DOMAIN>
