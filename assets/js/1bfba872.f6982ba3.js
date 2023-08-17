/*! For license information please see 1bfba872.f6982ba3.js.LICENSE.txt */
"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[9624],{7006:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>o,contentTitle:()=>a,default:()=>p,frontMatter:()=>r,metadata:()=>l,toc:()=>c});var t=s(5893),i=s(1151);const r={title:"Self-Hosting"},a="Self-Hosting",l={unversionedId:"integration/self-host",id:"integration/self-host",title:"Self-Hosting",description:"This page is not for general users, this page used to keep track what softwares and services that I (DOM Cloud Developer) employ so that I don't forget the steps needed when I create a new server from stratch.",source:"@site/docs/integration/self-host.mdx",sourceDirName:"integration",slug:"/integration/self-host",permalink:"/docs/integration/self-host",draft:!1,unlisted:!1,editUrl:"https://github.com/domcloud/domcloud-co/tree/master/docs/integration/self-host.mdx",tags:[],version:"current",frontMatter:{title:"Self-Hosting"},sidebar:"tutorialSidebar",previous:{title:"Troubleshooting",permalink:"/docs/integration/troubleshoot"}},o={},c=[{value:"OS and Installation",id:"os-and-installation",level:2},{value:"Very basic stuff",id:"very-basic-stuff",level:3},{value:"Package installs",id:"package-installs",level:3},{value:"Configuration Files",id:"configuration-files",level:2},{value:"System Files",id:"system-files",level:3},{value:"Services",id:"services",level:3},{value:"MariaDB",id:"mariadb",level:3},{value:"PostgreSQL",id:"postgresql",level:3},{value:"NGINX",id:"nginx",level:3},{value:"Fail2Ban",id:"fail2ban",level:3},{value:"Iptables",id:"iptables",level:3}];function d(e){const n=Object.assign({h1:"h1",p:"p",h2:"h2",h3:"h3",ol:"ol",li:"li",a:"a",code:"code",admonition:"admonition",pre:"pre",strong:"strong"},(0,i.ah)(),e.components);return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h1,{id:"self-hosting",children:"Self-Hosting"}),"\n",(0,t.jsx)(n.p,{children:"This page is not for general users, this page used to keep track what softwares and services that I (DOM Cloud Developer) employ so that I don't forget the steps needed when I create a new server from stratch."}),"\n",(0,t.jsx)(n.h2,{id:"os-and-installation",children:"OS and Installation"}),"\n",(0,t.jsx)(n.h3,{id:"very-basic-stuff",children:"Very basic stuff"}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsx)(n.li,{children:"Install Rocky Linux, or any RHEL9 system (untested)."}),"\n",(0,t.jsxs)(n.li,{children:["Install ",(0,t.jsx)(n.a,{href:"https://www.virtualmin.com/documentation/installation/automated/",children:"Virtualmin"}),": ",(0,t.jsx)(n.code,{children:"sh virtualmin-install --minimal --bundle LEMP"})]}),"\n",(0,t.jsxs)(n.li,{children:["Install ",(0,t.jsx)(n.a,{href:"https://www.phusionpassenger.com/docs/advanced_guides/install_and_upgrade/nginx/install/oss/el9.html",children:"Passenger"}),": ",(0,t.jsx)(n.code,{children:"yum install nginx-mod-http-passenger"})]}),"\n",(0,t.jsxs)(n.li,{children:["Enable quotas for ",(0,t.jsx)(n.code,{children:"/"})]}),"\n",(0,t.jsxs)(n.li,{children:["Set ",(0,t.jsx)(n.code,{children:"port=2443"})," in ",(0,t.jsx)(n.code,{children:"/etc/webmin/miniserv.conf"})]}),"\n",(0,t.jsxs)(n.li,{children:["Set ",(0,t.jsx)(n.code,{children:"PermitRootLogin yes"})," and ",(0,t.jsx)(n.code,{children:"PasswordAuthentication yes"})," in ",(0,t.jsx)(n.code,{children:"/etc/ssh/sshd_config"})]}),"\n",(0,t.jsx)(n.li,{children:"Disable all email related services, uninstall imap and dovecot if possible."}),"\n",(0,t.jsxs)(n.li,{children:["Clone and set up ",(0,t.jsx)(n.a,{href:"https://github.com/domcloud/bridge",children:"DOM Cloud Bridge"})," with user ",(0,t.jsx)(n.code,{children:"bridge"})]}),"\n"]}),"\n",(0,t.jsx)(n.h3,{id:"package-installs",children:"Package installs"}),"\n",(0,t.jsx)(n.p,{children:"PHP:"}),"\n",(0,t.jsx)(n.admonition,{type:"info",children:(0,t.jsx)(n.p,{children:"Uninstall all PHP from appstream first."})}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:'dnf install {php74,php80,php81,php82}-php-{bcmath,cli,common,devel,fpm,gd,imap,intl,mbstring,mysqlnd,opcache,pdo,pecl-mongodb,pecl-redis,pecl-zip,pgsql,process,sodium,soap,xml}\nln -s `which php82` /usr/local/bin/php\ncurl -sS https://getcomposer.org/installer | php -- --install-dir=/usr/local/bin --filename=composer\nfind /etc/opt/remi/ -maxdepth 1 -name \'php*\' -exec sed -i "s/upload_max_filesize = 2M/upload_max_filesize = 512M/g" {}/php.ini \\; -exec sed -i "s/post_max_size = 8M/post_max_size = 512M/g" {}/php.ini \\; \n'})}),"\n",(0,t.jsx)(n.p,{children:"Tools and libs:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:"dnf install certbot cmake gcc-c++ git ncdu htop iftop ipset jq lsof make nano rsync sendmail strace tar time vim wget yarn xz\ndnf install libcurl-devel libffi-devel libmd libsqlite3x-devel libreport-filesystem mesa-libGL perl-DBD-Pg passenger-devel perl-devel perl-macros readline-devel\n"})}),"\n",(0,t.jsx)(n.p,{children:"Services:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:"dnf install do-agent earlyoom fail2ban-server postfix proftpd\ndnf install postgresql-server postgresql-contrib postgresql-server-devel\n"})}),"\n",(0,t.jsx)(n.admonition,{type:"info",children:(0,t.jsx)(n.p,{children:"Enable PostgreSQL service from webmin after installing it"})}),"\n",(0,t.jsx)(n.h2,{id:"configuration-files",children:"Configuration Files"}),"\n",(0,t.jsx)(n.h3,{id:"system-files",children:"System Files"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-ini",metastring:'title="/etc/fstab"',children:"UUID=<uuid>       /       xfs     relatime,seclabel,uquota,inode64,gquota,attr2,rw             0       0\nUUID=<uuid>       /home   xfs     relatime,seclabel,uquota,inode64,gquota,attr2,rw,nofail      0       0\nproc              /proc   proc    defaults,nosuid,nodev,noexec,relatime,hidepid=2,gid=adm      0       0\n/swapfile         swap    swap    defaults,nofail                                              0       0\n"})}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-ini",metastring:'title="/etc/environment" ',children:'LC_ALL="en_US.UTF-8"\nLC_CTYPE="en_US.UTF-8"\nLANGUAGE="en_US.UTF-8"\n'})}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-yaml",metastring:'title="/etc/gemrc" ',children:"gem: --no-document\n"})}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-ini",metastring:'title="/etc/gitconfig"',children:"[pull]\n        rebase = true\n"})}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-conf",metastring:'title="/etc/resolv.conf"',children:"nameserver 127.0.0.1\nnameserver 1.1.1.1\nnameserver 1.0.0.1\n"})}),"\n",(0,t.jsx)(n.h3,{id:"services",children:"Services"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-ini",metastring:'title="/etc/systemd/system/nginx.service.d/override.conf"',children:"[Service]\nLimitNOFILE=65535\n"})}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-ini",metastring:'title="/usr/lib/systemd/system/earlyoom.service"',children:"[Service]\n...\nSupplementaryGroups=adm\n...\n"})}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-ini",metastring:'title="/usr/lib/systemd/system/iptables.service"',children:"[Service]\n...\nExecStartPre=ipset -! create whitelist hash:ip\n...\n"})}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-ini",metastring:'title="/usr/lib/systemd/system/ip6tables.service"',children:"[Service]\n...\nExecStartPre=ipset -! create whitelist-v6 hash:ip family inet6\n...\n"})}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-ini",metastring:'title="/etc/default/earlyoom"',children:"EARLYOOM_ARGS=\"-r 0 -m 4 -M 409600 -g --prefer '^(node|python|ruby|java)' --avoid '^(dnf|mariadbd|postmaster|named|nginx|polkitd|do-agent|sshd|php-fpm)$'\"\n"})}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-ini",metastring:'title="/var/spool/cron/root"',children:"@daily passenger-config reopen-logs\n* * * * * pgrep PassengerAgent || systemctl restart nginx\n*/5 * * * * /usr/bin/node /home/bridge/public_html/sudokill.js -i bridge,do-agent,dbus,earlyoom,mysql,named,nobody,postgres,polkitd,rpc\n@weekly find /home -maxdepth 2 -name .cache -or -name .npm -type d -ctime +7 -exec rm -rf {} \\;\n@monthly find /etc/letsencrypt/{csr,keys} -name *-certbot.pem -type f -mtime +180 -exec rm -f {} ';'\n@reboot sudo /usr/bin/bash /home/daemon/public_html/src/whitelist/refresh.sh\n"})}),"\n",(0,t.jsx)(n.h3,{id:"mariadb",children:"MariaDB"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-ini",metastring:'title="/etc/my.cnf.d/mariadb-server.cnf"',children:"[mysqld]\ndatadir=/var/lib/mysql\nsocket=/var/lib/mysql/mysql.sock\nlog-error=/var/log/mariadb/mariadb.log\npid-file=/run/mariadb/mariadb.pid\ninnodb_file_per_table = 1\ninnodb_buffer_pool_size = 64M\nmyisam_sort_buffer_size = 8M\nread_rnd_buffer_size = 512K\nnet_buffer_length = 8K\nread_buffer_size = 256K\nsort_buffer_size = 512K\ntable_open_cache = 64\nmax_allowed_packet = 64M\nkey_buffer_size = 16M\n"})}),"\n",(0,t.jsx)(n.h3,{id:"postgresql",children:"PostgreSQL"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-ini",metastring:'title="/var/lib/pgsql/data/postgresql.conf"',children:"...\nlisten_addresses = '*'\nmax_connections = 1000\n...\n"})}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-ini",metastring:'title="/var/lib/pgsql/data/pg_hba.conf"',children:"local   all             all                                     trust\nhost    all             all             127.0.0.1/32            trust\nhost    all             all             ::1/128                 trust\nlocal   replication     all                                     trust\nhost    replication     all             127.0.0.1/32            trust\nhost    replication     all             ::1/128                 trust\nhost    all             all             0.0.0.0/0               md5\nhost    all             all             ::/0                    md5\n"})}),"\n",(0,t.jsx)(n.h3,{id:"nginx",children:"NGINX"}),"\n",(0,t.jsx)(n.admonition,{type:"info",children:(0,t.jsxs)(n.p,{children:["In webmin, set ",(0,t.jsx)(n.strong,{children:"File or directory for new virtual hosts"})," to ",(0,t.jsx)(n.code,{children:"/etc/nginx/conf.d/"})]})}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-conf",metastring:'title="/etc/nginx/fastcgi.conf"',children:"fastcgi_param GATEWAY_INTERFACE CGI/1.1;\nfastcgi_param SERVER_SOFTWARE nginx;\nfastcgi_param QUERY_STRING $query_string;\nfastcgi_param REQUEST_METHOD $request_method;\nfastcgi_param CONTENT_TYPE $content_type;\nfastcgi_param CONTENT_LENGTH $content_length;\nfastcgi_param SCRIPT_FILENAME $document_root$fastcgi_script_name;\nfastcgi_param SCRIPT_NAME $fastcgi_script_name;\nfastcgi_param REQUEST_URI $request_uri;\nfastcgi_param DOCUMENT_URI $document_uri;\nfastcgi_param DOCUMENT_ROOT $document_root;\nfastcgi_param SERVER_PROTOCOL $server_protocol;\nfastcgi_param REMOTE_ADDR $remote_addr;\nfastcgi_param REMOTE_PORT $remote_port;\nfastcgi_param SERVER_ADDR $server_addr;\nfastcgi_param SERVER_PORT $server_port;\nfastcgi_param SERVER_NAME $server_name;\nfastcgi_param PATH_INFO $fastcgi_path_info;\nfastcgi_param HTTPS $https;\nfastcgi_split_path_info ^(.+\\.php)(/.+)$;\nfastcgi_read_timeout 600s;\n"})}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-conf",metastring:'title="/etc/nginx/passenger.conf"',children:"passenger_root /usr/share/ruby/vendor_ruby/phusion_passenger/locations.ini;\npassenger_ruby /usr/bin/ruby;\npassenger_python /usr/bin/python3;\npassenger_nodejs /usr/bin/node;\npassenger_friendly_error_pages on;\npassenger_disable_security_update_check on;\npassenger_disable_anonymous_telemetry on;\npassenger_instance_registry_dir /var/run/passenger-instreg;\npassenger_log_file /var/log/nginx/passenger.log;\npassenger_min_instances 0;\npassenger_pool_idle_time 900;\npassenger_max_pool_size 3;\n"})}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-conf",metastring:'title="/etc/nginx/finetuning.conf"',children:"server_names_hash_max_size 131072;\nlimit_req_zone $binary_remote_addr zone=basic_limit:50m rate=4r/s;\nlimit_req zone=basic_limit burst=100 nodelay;\ngzip_types text/css application/javascript image/svg+xml;\ngzip_min_length 1024;\ngzip_comp_level 3;\ngzip on;\nsendfile on;\ntcp_nopush on;\nkeepalive_timeout 60;\nkeepalive_requests 1000;\ndirectio 16m;\noutput_buffers 3 512k;\nclient_max_body_size 512m;\ndisable_symlinks if_not_owner;\nproxy_http_version 1.1;\nssl_protocols TLSv1.2 TLSv1.3;\nserver_tokens off;\nmerge_slashes off;\nmsie_padding off;\nssl_session_cache shared:SSL:1m;\nssl_session_timeout 1h;\nssl_session_tickets off;\nssl_early_data on;\nssl_buffer_size 4k;\n"})}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-conf",metastring:'title="/etc/nginx/nginx.conf" ',children:'user nginx;\nworker_processes auto;\nworker_rlimit_nofile 65535;\nerror_log /var/log/nginx/error.log;\npid /run/nginx.pid;\ninclude /usr/share/nginx/modules/*.conf;\nevents {\n    worker_connections 10240;\n}\nhttp {\n    log_format main \'$remote_addr - $remote_user [$time_local] "$request" \'\n                    \'$status $body_bytes_sent "$http_referer" \'\n                    \'"$http_user_agent" "$http_x_forwarded_for"\';\n    access_log /var/log/nginx/access.log main;\n    include /etc/nginx/mime.types;\n    include /etc/nginx/finetuning.conf;\n    include /etc/nginx/fastcgi.conf;\n    include /etc/nginx/passenger.conf;\n    default_type application/octet-stream;\n    map $sent_http_content_type $expires {\n        default off;\n        text/html epoch;\n        text/css max;\n        application/javascript max;\n        ~image/ max;\n        ~font/ max;\n        ~audio/ max;\n        ~video/ max;\n    }\n    expires $expires;\n    server {\n        server_name _;\n        listen <IPv4>;\n        listen [<IPv6>];\n        return 301 https://$host$request_uri;\n    }\n    include /etc/nginx/conf.d/*.conf;\n}\n'})}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-conf",metastring:'title="/etc/logrotate.d/nginx"',children:"/var/log/nginx/*.log /var/log/virtualmin/*_log {\n    create 0640 nginx root\n    daily\n    rotate 10\n    missingok\n    notifempty\n    compress\n    delaycompress\n    sharedscripts\n    postrotate\n\t/bin/kill -USR1 `cat /run/nginx.pid 2>/dev/null` 2>/dev/null || true\n    endscript\n}\n"})}),"\n",(0,t.jsx)(n.h3,{id:"fail2ban",children:"Fail2Ban"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-ini",metastring:'title="/etc/fail2ban/filter.d/wordpress-auth.conf"',children:'[Definition]\nfailregex = ^<HOST> .* "POST /+xmlrpc.php .* 200 \\d* ".*"$\n            ^<HOST> .* "POST /wp-login.php .* 200 \\d* ".*"$\nignoreregex =\n'})}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-ini",metastring:'title="/etc/fail2ban/jail.local"',children:"[DEFAULT]\nmaxretry = 3\nbantime = 43200 ; 12h\n\n[sshd]\nenabled = true\nport    = ssh\n\n[webmin-auth]\nport    = 2443\nenabled = true\n\n[phpmyadmin-syslog]\nenabled = true\n\n[mysqld-auth]\nenabled = true\n\n[wordpress-auth]\nenabled = true\nport = http,https\nlogpath = /var/log/virtualmin/*access_log\n"})}),"\n",(0,t.jsx)(n.h3,{id:"iptables",children:"Iptables"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-conf",metastring:'title="/etc/sysconfig/iptables"',children:"*filter\n:INPUT ACCEPT [0:0]\n:OUTPUT ACCEPT [0:0]\n:FORWARD ACCEPT [0:0]\n-A INPUT -p icmp -j ACCEPT\n-A INPUT -i lo -j ACCEPT\n-A INPUT -p tcp -m mport --dports 21,22,80,443,3306,5432 -j ACCEPT\n-A INPUT -p tcp --sport 53 --dport 53 -j ACCEPT\n-A INPUT -p udp --sport 53 --dport 53 -j ACCEPT\n-A INPUT -p tcp --dport 2443:2453 -j ACCEPT\n-A INPUT -p tcp --dport 32768:65535 -j ACCEPT\n-A INPUT -j REJECT --reject-with icmp-host-prohibited\n-A FORWARD -j REJECT --reject-with icmp-host-prohibited\n-A OUTPUT -o lo -j ACCEPT\n-A OUTPUT -m conntrack --ctstate ESTABLISHED -j ACCEPT\n-A OUTPUT -p tcp --dport 22 -j ACCEPT\n-A OUTPUT -p tcp --sport 53 --dport 53 -j ACCEPT\n-A OUTPUT -p udp --sport 53 --dport 53 -j ACCEPT\n-A OUTPUT -p tcp --dport 25 --sport 25 -j REJECT\n-A OUTPUT -m set -j ACCEPT --match-set whitelist dst\nCOMMIT\n"})}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-conf",metastring:'title="/etc/sysconfig/ip6tables"',children:"*filter\n:INPUT ACCEPT [0:0]\n:OUTPUT ACCEPT [0:0]\n:FORWARD ACCEPT [0:0]\n-A INPUT -p ipv6-icmp -j ACCEPT\n-A INPUT -i lo -j ACCEPT\n-A INPUT -p tcp -m mport --dports 21,22,80,443,3306,5432 -j ACCEPT\n-A INPUT -p tcp --sport 53 --dport 53 -j ACCEPT\n-A INPUT -p udp --sport 53 --dport 53 -j ACCEPT\n-A INPUT -p tcp --dport 2443:2453 -j ACCEPT\n-A INPUT -p tcp --dport 32768:65535 -j ACCEPT\n-A INPUT -j REJECT --reject-with icmp6-adm-prohibited\n-A FORWARD -j REJECT --reject-with icmp6-adm-prohibited\n-A OUTPUT -o lo -j ACCEPT\n-A OUTPUT -m conntrack --ctstate ESTABLISHED -j ACCEPT\n-A OUTPUT -p tcp --dport 22 -j ACCEPT\n-A OUTPUT -p tcp --sport 53 --dport 53 -j ACCEPT\n-A OUTPUT -p udp --sport 53 --dport 53 -j ACCEPT\n-A OUTPUT -p tcp --dport 25 --sport 25 -j REJECT\n-A OUTPUT -m set -j ACCEPT --match-set whitelist-v6 dst\nCOMMIT\n"})})]})}const p=function(e={}){const{wrapper:n}=Object.assign({},(0,i.ah)(),e.components);return n?(0,t.jsx)(n,Object.assign({},e,{children:(0,t.jsx)(d,e)})):d(e)}},5251:(e,n,s)=>{s(7418);var t=s(7294),i=60103;if(n.Fragment=60107,"function"==typeof Symbol&&Symbol.for){var r=Symbol.for;i=r("react.element"),n.Fragment=r("react.fragment")}var a=t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,l=Object.prototype.hasOwnProperty,o={key:!0,ref:!0,__self:!0,__source:!0};function c(e,n,s){var t,r={},c=null,d=null;for(t in void 0!==s&&(c=""+s),void 0!==n.key&&(c=""+n.key),void 0!==n.ref&&(d=n.ref),n)l.call(n,t)&&!o.hasOwnProperty(t)&&(r[t]=n[t]);if(e&&e.defaultProps)for(t in n=e.defaultProps)void 0===r[t]&&(r[t]=n[t]);return{$$typeof:i,type:e,key:c,ref:d,props:r,_owner:a.current}}n.jsx=c,n.jsxs=c},5893:(e,n,s)=>{e.exports=s(5251)},1151:(e,n,s)=>{s.d(n,{Zo:()=>l,ah:()=>r});var t=s(7294);const i=t.createContext({});function r(e){const n=t.useContext(i);return t.useMemo((()=>"function"==typeof e?e(n):{...n,...e}),[n,e])}const a={};function l({components:e,children:n,disableParentContext:s}){let l;return l=s?"function"==typeof e?e({}):e||a:r(e),t.createElement(i.Provider,{value:l},n)}}}]);