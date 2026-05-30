if [ ! -d ~/PersonalSite ]; then
  git clone https://github.com/Tamillis/Personal_Site_2.git ~/PersonalSite
  npm install
fi

cd ~/PersonalSite

git fetch origin main

git pull origin main
npm install
npm run build

rm -rf /var/www/personal-site/assets/*
rm -f  /var/www/personal-site/index.html
cp -r dist/ /var/www/personal-site/