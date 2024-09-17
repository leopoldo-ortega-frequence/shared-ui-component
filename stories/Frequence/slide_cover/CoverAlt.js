export const renderCoverAlt = (data) => {

    const div = document.createElement("div");
     
      const template = /*html*/`
        <div class="page slide shell-2-col cover-alternate">
                <div class="section-content-cover">
                    <div class="logo-container logo-${data.logo_type}">
                        <img class="logo" src="${data.logo}">
                    </div>
                </div>
                <div class="content-section-cover">
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
     `;

    // append the base "template" to the div
    $(div).append(template);

    //* Simlating the JS part of RFP, adding the widgets to the slide

    return div.innerHTML;
}