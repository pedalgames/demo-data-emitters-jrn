These emitters sends data to ``http://127.0.01:49999/plugin``, the plugin data interface in Pedal Games.

## index-randomtext.js

Generates a random string every 10 seconds and sends it to Pedal Games. It can be used by plugins by referring to ``texts/quote`` in plugin fields.

Run with

``
node index-randomtext.js
``


## index-time.js

Formats current time as a string every 10 seconds and sends it to Pedal Games. It can be used by plugins by referring to ``texts/time`` in plugin fields.

Run with

``
node index-time.js
``
