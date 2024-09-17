// This will need to be called after EVERY SLIDE render
// Need to load in the RAW data in RFP API format AND the common JS file

async function callMustache() {
    try {
        const rfp_data_file = await fetch("/data/sample_rfp_data.json");
        const rfp_data = await rfp_data_file.json();
        
        const js_file = await fetch("/js/common.js");
        const js_template = await js_file.text();

        eval(Mustache.render(js_template, rfp_data))
    } catch (error) {
        console.log("Something went wrong...");
        console.log(error);
    }
}