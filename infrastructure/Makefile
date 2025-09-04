
install:
	ansible-galaxy install -r requirements.yml

deploy-runner:
	ansible-playbook -i inventory.yml -K system.yml --ask-vault-pass --tags group -k

deploy:
	ansible-playbook -i inventory.yml -K system.yml --ask-vault-pass -k