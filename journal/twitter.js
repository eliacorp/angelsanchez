angular.module('myApp')
    .factory('twitter', function (env, $localStorage, $log, $q,$rootScope, $stateProvider) {
        $log.log(env);
        var url_q = $q.defer();
        // var cb = new Codebird, auth_url;

        var cb = new Codebird;
           cb.setConsumerKey("R8sSVQGZH0odXBKUVwMDkmbPE", "fX4HBXlBSJxx53nCKyubJeqtesGUkySS6GZPwcAYisKm38crKQ");
           cb.setToken("194164586-vxP6zz0eymefKwISdbYHrmAwTlwIkqo7Nr0b7YEB", "2AOP5x2g3wXFAmcLq3myzmnhlf2MMqoB7plEGsWjqhxhd");
        //
        // cb.setConsumerKey(env.twitter.consumerKey, env.twitter.consumerSecret);
        if ($localStorage.twitter_tokken && $localStorage.twitter_tokken_secret) {
            cb.setToken($localStorage.twitter_tokken, $localStorage.twitter_tokken_secret);
        }
        cb.__call(
            "oauth_requestToken",
            {oauth_callback: env.twitter.callBackUrl},
            function (reply) {
                $localStorage.twitter_tokken = reply.oauth_token;
                $localStorage.twitter_tokken_secret = reply.oauth_token_secret;
                cb.setToken(reply.oauth_token, reply.oauth_token_secret);
                cb.__call(
                    "oauth_authorize",
                    {},
                    function (auth) {
                        auth_url = auth;
                        url_q.resolve(auth);
                    }
                );
            }
        );

        return{
            url: url_q.promise,
            login: function () {
                var login_q = $q.defer();
                $localStorage.$reset({
                    oauth_token: '',
                    oauth_verifier: ''
                });
                window.open(auth_url, 'Twitter', 'width=500,height=400');
                $rootScope.$storge = $localStorage.$default();
                var aouth_watch = $rootScope.$watch('$storge.oauth_verifier', function (newVal, oldVal) {
                    if (newVal) {
                        delete $rootScope.$storge;
                       cb.__call(
                            "oauth_accessToken",
                            {
                                oauth_verifier: newVal
                            },
                            function (reply) {
                                $log.debug(reply);
                                if (reply.httpstatus == 200) {
                                    $localStorage.twitter_tokken = reply.oauth_token;
                                    $localStorage.twitter_tokken_secret = reply.oauth_token_secret;

                                    cb.setToken(reply.oauth_token, reply.oauth_token_secret);
                                    cb.__call(
                                        "account_verifyCredentials",
                                        {},
                                        function (reply) {
                                            if (reply.httpstatus == 200) {
                                                login_q.resolve(reply);
                                            } else {
                                                login_q.reject('Some Error');
                                            }
                                        }
                                    );
                                } else {
                                    login_q.reject('Some Error');
                                }
                            });


                        aouth_watch();
                    }
                });


                return login_q.promise;
            }
        }
    })
    .config(function ($stateProvider) {
    $stateProvider.state('callback', {
        url: "/callback_twitter",
        template: "<div></div>",
        controller: function ($scope, $localStorage, $window) {
            $localStorage.oauth_token = getParameterByName('oauth_token');
            $localStorage.oauth_verifier = getParameterByName('oauth_verifier');
            $window.close();
        }
    })
});

function getParameterByName(name) {
    name = name.replace(/[\[]/, "\\[").replace(/[\]]/, "\\]");
    var regex = new RegExp("[\\?&]" + name + "=([^&#]*)"),
        results = regex.exec(location.search);
    return results == null ? "" : decodeURIComponent(results[1].replace(/\+/g, " "));
}
