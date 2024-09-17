// Class to parse and handle mustache syntax to retrieve API data
// Goal is to get the desired data and output in a JS format
class MustacheHandler {

    static getPricingName() {
        return `[
            {{#pricing}}
            "{{name}}",
            {{/pricing}}
          ]`
    }
}