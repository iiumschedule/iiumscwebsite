# Input Parser API

Format to proper IIUM course code formats.

## Endpoint

https://albiruni-input-parser.herokuapp.com

## Usage

Append unformatted course code to the end of the url.

## Examples

### Browser

```
https://albiruni-input-parser.herokuapp.com/mcte2333
```

### cURL

```ps
curl -X GET \
  'https://albiruni-input-parser.herokuapp.com/mcte2333' \
  --header 'Accept: */*' \
  --header 'User-Agent: Thunder Client (https://www.thunderclient.com)'
```

### Python Requests

```python
import requests

reqUrl = "https://albiruni-input-parser.herokuapp.com/mcte2333"

headersList = {
 "Accept": "*/*",
 "User-Agent": "Thunder Client (https://www.thunderclient.com)"
}

payload = ""

response = requests.request("GET", reqUrl, data=payload,  headers=headersList)

print(response.text)
```

### Dart http

```dart
var headersList = {
 'Accept': '*/*',
 'User-Agent': 'Thunder Client (https://www.thunderclient.com)'
};
var url = Uri.parse('https://albiruni-input-parser.herokuapp.com/mcte2333');

var req = http.Request('GET', url);
req.headers.addAll(headersList);

var res = await req.send();
final resBody = await res.stream.bytesToString();

if (res.statusCode >= 200 && res.statusCode < 300) {
  print(resBody);
}
else {
  print(res.reasonPhrase);
}
```
