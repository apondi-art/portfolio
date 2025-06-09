package handlers

import (
	"html/template"
	"net/http"
)

var Temp = template.Must(template.ParseGlob("*.html"))

func Homepage(w http.ResponseWriter, r *http.Request) {
	err := Temp.ExecuteTemplate(w, "index.html", nil)
	if err != nil {
		http.Error(w, err.Error(), http.StatusInternalServerError)
		return
	}
}
