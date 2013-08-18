i3-infobar
==========

Modular informer for i3bar

This informer can show you any useful messages via plugins. The plugins can be written in **any programming language**: you just need to write to stdout a json-formatted string.

Example:
```
{"name":"weather","full_text":"Moscow: ☽ 17","color":"#FFCC00","separator":false},
```

There are four items: a plugin name, a plugin text, a plugin color and a separator remover(we will use our own separator). Also, after the object you need to write a trailing comma.

Installation
------------

Just clone the repo and copy it's contents to ~/.i3, then add these lines into ~/.i3/config:

```
bar {
	position top
	status_command ~/.i3/infobar
}
```



