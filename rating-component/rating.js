
const COMPONENT_NAME = 'rating-component';

export async function getRatingComponent() {
  console.log('rating works'); 
  // Getting the HTML code of this component
  const html = await (await fetch('./rating-component/rating.html')).text();

  return html;
}
