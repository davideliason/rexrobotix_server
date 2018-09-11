# Backend for IoT Project
## 9/10/2018
### David Eliason

## What
This is the backend piece for Maker's Faire 2018 to be held in Portland, OR 9/15-9/16/2018.

Front-end is React hosted within S3 bucket on AWS cloud platform.

Back-end, here, is using an EC2 instance with express sitting on node.js acting as RESTful API. The EC2 instance is part of a VPC architecture for firewall security.

Previously, on the EC2 instance, I'd created an Express server, very simple, to test out the framework, but building code via the terminal is awkward so added a private key to the EC2 instance and the backend repo so that I can work within the github environment and simpy pull code into my EC2 instance.

Ahh, much better!

Now, I can easily make changes on my local computer, update the repo, and pull the changes within the EC2 instance. Bliss.