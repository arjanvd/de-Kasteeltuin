!function(t,n){var $=t.jQuery||t.Cowboy||(t.Cowboy={}),u;$.throttle=u=function(t,u,e,o){function i(){function i(){a=+new Date,e.apply(f,g)}function c(){r=n}var f=this,d=+new Date-a,g=arguments;o&&!r&&i(),r&&clearTimeout(r),o===n&&d>t?i():u!==!0&&(r=setTimeout(o?c:i,o===n?t-d:t))}var r,a=0;return"boolean"!=typeof u&&(o=e,e=u,u=n),$.guid&&(i.guid=e.guid=e.guid||$.guid++),i},$.debounce=function(t,e,o){return o===n?u(t,e,!1):u(t,o,e!==!1)}}(this);