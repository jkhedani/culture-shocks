# Parcel Create React App
@author Justin Hedani

## Development
	
	$ cp .env.sample .env
	$ yarn
	$ yarn start

## Deployment

	$ yarn build

Optionally, you can then place build in a Docker environment:

	$ yarn docker:build
	$ yarn docker:tag

## Source Overview

`dist/` Static build folder for deployment (gets created after build)
`src/`	Source files for project
`src/components/` Various React component files and styles
`src/media/` Graphics, etc.
`src/routes/` Entry way into the various
`src/styles/` Various styles and CSS frameworks folder 
`src/index.tsx` Entry way into the app

## Environmental Variables

The `create-react-app` script/package can't deal with simple things like making the changing of environmental variables and deployment locations easy so: 
	
	a) Modify .env.local for local env adjustments
	b) edit the package the JSON when building for staging or production
	c) Use a Parcel bootstrap for first

## Deployment (AWS)
https://www.npmjs.com/package/serve

1. Create key pair in EC2 Console
2. Launch EC2 Instance and enable inbound traffic for HTTP
3. Update SSH line in package.json
4. Create ECS Registry and push Docker image up
5. SSH, install Docker:

	sudo yum update -y
	sudo yum install -y docker
	sudo usermod -a -G docker ec2-user
	(reboot ec2)
	sudo service docker start

6. Configure your EC2 instance to pull ECR images using user creds and serve:

	aws configure
	$(aws ecr get-login --no-include-email --region us-west-2)
	docker pull 791906567261.dkr.ecr.us-west-2.amazonaws.com/parcel-bootstrap-ts:latest
	docker run -p 80:3000 791906567261.dkr.ecr.us-west-2.amazonaws.com/parcel-bootstrap-ts:latest