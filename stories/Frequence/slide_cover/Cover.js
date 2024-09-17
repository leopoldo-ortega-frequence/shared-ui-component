export const renderCover = (data) => {
    
    const div = document.createElement("div");
     
      const template = /*html*/`
       <div class="page slide shell-2-col cover">
            <div class="bg-shape"></div>

            <div class="section-content-cover left">
                <div class="logo-container">
                <img class="logo" src="${data.logo}"/>
                </div>
                <div class="content-area-cover">
                <h1 class="cover">${data.advertiser_name}</h1>
                <h2 class="subtitle">${data.partner_name}</h2>
                <div class="cover-details">
                    <span class="label">${data.first_name} ${data.last_name}</span>
                    <span class="label">${data.submitter_email}</span>
                    <span class="label">${data.phone_number}</span>
                </div>
                <div class="cover-dates">
                    <span class="label">${data.proposal_date}</span>
                </div>
                </div>
            </div>
        
            <div class="section-content-cover right">
                <div class="img-container">
                    <img src="/assets/image-targeting.png"/>
                </div>
            </div>
        </div>
     `;

    // append the base "template" to the div
    $(div).append(template);

    //* Simlating the JS part of RFP, adding the widgets to the slide

    return div.innerHTML;
}