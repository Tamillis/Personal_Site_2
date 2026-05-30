if [ ! -d ~/PersonalSite ]; then
  git clone https://github.com/Tamillis/Personal_Site_2.git ~/PersonalSite
fi

cd ~/PersonalSite

git pull origin main

cd ~/PersonalSite/personal_site
npm install

python3 build-mewiki-routes.py

npm run build

rm -rf /var/www/personal-site/assets/*
rm -f  /var/www/personal-site/index.html
cp -r dist/* /var/www/personal-site/