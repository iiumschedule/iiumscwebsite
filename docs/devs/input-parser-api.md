# Input Parser API

Format to proper IIUM course code formats.

## Endpoint

https://albiruni-input-parser.herokuapp.com

> Append the unformatted course code to the end of the url.

## Examples

### Browser

```
https://albiruni-input-parser.herokuapp.com/mcte2333
```

### cURL

```bash
curl -X GET \
  'https://albiruni-input-parser.herokuapp.com/mcte2333'
```

### Python Requests

```python
import requests

reqUrl = "https://albiruni-input-parser.herokuapp.com/mcte2333"

response = requests.request("GET", reqUrl)

result = response.json()['result']

print(result)
```

### Dart http

```dart
import 'dart:convert';
import 'package:http/http.dart' as http;

void main() async {
  var url = Uri.parse('https://albiruni-input-parser.herokuapp.com/mcte2333');

  var res = await http.get(url);

  if (res.statusCode >= 200 && res.statusCode < 300) {
    var json = jsonDecode(res.body);
    print(json);
  } else {
    print(res.reasonPhrase);
  }
}
```
