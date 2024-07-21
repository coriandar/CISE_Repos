#!/bin/bash
if [ $EUID -eq 0 ]; then
    echo "need be user"
    exit 255
fi

init() {
    printf "\n==========[ update       ]==========\n"
    sudo timedatectl set-timezone Pacific/Auckland
    sudo apt update -y && sudo apt upgrade -y
}

install_node() {
    printf "\n==========[ install node ]==========\n"
    curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.7/install.sh | bash
    export NVM_DIR="$HOME/.nvm"
    [ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh"  # This loads nvm
    [ -s "$NVM_DIR/bash_completion" ] && \. "$NVM_DIR/bash_completion"  # This loads nvm bash_completion
    nvm install 20
}

install_nest() {
    printf "\n==========[ install nest ]==========\n"
    npm i -g @nestjs/cli
}

init
install_node
install_nest
printf "\n==========[ complete ]==========\n"
exec bash