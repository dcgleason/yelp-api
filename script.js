const url = `https://api.yelp.com/v3/businesses/search/Starbucks`;
fetch(url, {
  method:'GET',
  headers: {
    'Authorization': `Bearer vr1mNmIl8NGZNJZ0__rY5p1tgCQXSdp64QeCAsTfVxIA5q7R6ZCwcNSY6j-rJr48-zWxiHE8VBiDtVqTV-ux0WCPj3hCQH0as4Q7rRqtiXx1FMOE_i9B8A94y7YwXnYx`}
})
  .then(results => results.json())
  .then(res => {console.log(res)
  })