var posts=["2023/04/27/230427-redis-config/","2023/04/26/230426-redis-server/","2023/05/30/230530-redis-event-driven/","2023/06/02/230602-redis-cluster-hashtag/","2023/09/18/230918-game-theory/","2023/09/18/230918-zfb-by-appstore-card/","2023/10/07/231007-game-theory2/","2023/10/07/231007-game-theory3/","2020/10/08/about-cn-language/","2022/10/04/5-ways-generate-distributed-unique-id/","2021/01/13/about-unix-contributor/","2021/05/25/about-unix/","2021/06/20/algo-big-number-multiply/","2021/08/28/algo-consistent-hash/","2022/01/29/algo-exponential-backoff/","2021/04/19/algo-fisher–yates-shuffle/","2021/11/19/algo-prime-number-shuffle/","2021/11/20/algo-python-vietnam-money/","2021/05/13/algo-road-story/","2021/06/23/algo-the-big-k/","2022/10/22/apple-giftcard/","2023/04/25/base-redis-db-ticket-dispenser/","2020/10/10/c-history/","2022/03/13/db-recover/","2021/05/18/distributed-lock/","2022/06/20/docker-build-stage/","2022/06/29/docker-desktop-question/","2021/05/24/etcd-lock/","2020/10/13/git-history-1/","2020/10/16/git-history-2-subcommand/","2020/10/18/git-history-3-db/","2020/10/19/git-history-4-object/","2022/06/21/gitlab-ci-cd/","2021/01/17/go-1-2/","2020/10/12/go-asm-plan9/","2021/01/16/go-atomic/","2021/08/14/go-build-register/","2022/03/10/go-build-tag/","2021/05/20/go-cond/","2021/08/20/go-generics/","2021/07/09/go-grpc-dataflow/","2020/10/15/go-han/","2021/01/14/go-hotpath/","2022/01/18/go-how-to-install/","2022/03/24/go-interview-question/","2021/05/22/go-interview/","2021/06/22/go-kernal/","2021/12/20/go-leak/","2021/05/15/go-lock/","2022/07/06/go-mysql-transfer/","2021/06/19/go-out-colour/","2022/06/14/go-slice-append/","2022/04/22/go-slice-to-string/","2021/07/01/go-sysmon/","2021/04/13/go-time-stop/","2021/06/24/go-unsinged/","2021/03/08/go-timer/","2022/06/21/golang-lint/","2022/08/07/grpc-conflict/","2021/12/20/grpc-go-ingress/","2022/02/05/grpc-keepalive/","2021/05/14/internet-arch/","2021/05/17/internet-survival/","2021/05/30/interview-open-question/","2023/04/23/iot-device-shadow/","2021/05/23/linux-crontab/","2022/07/16/mqtt-mosquitto/","2021/10/15/mysql-acid/","2021/05/26/mysql-delete-field-uniq/","2022/03/24/mysql-id-exhaust/","2022/05/08/mysql-phantom-read/","2021/05/21/php-zombie/","2022/06/22/golang-lint-reviewdog/","2021/08/27/python-deep-copy/","2021/05/19/thread-kill-0/","2020/10/09/redis-king-cache/","2022/04/12/voice-calling-system/","2021/05/12/what-we-do-in-internet/","2023/11/11/theroadtoserfdom/","2024/07/07/240707-helm/"];function toRandomPost(){pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);};