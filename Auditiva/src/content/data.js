const data = () => {
const now = new Date();

const options = {
  weekday: 'long',   
  day: '2-digit',    
  month: 'long',     
  year: 'numeric',   
  hour: '2-digit',   
  minute: '2-digit', 
  hour12: true    
};

const formattedDate = now.toLocaleString('en-US', options);

return formattedDate
}
export default data;


