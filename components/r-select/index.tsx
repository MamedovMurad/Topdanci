import Select from 'react-select'
type ReactSelectUIProps = {
    width?:string,
    options?:{label:string, value:string}[],
    defValue?:{label:string, value:string}
}
const style = {
    control: (base:any) => ({
      ...base,
      border: 0,
      fontSize:'12px',
      // This line disable the blue border
      boxShadow: 'none'
    })
  };
const ReactSelectUI:React.FC<ReactSelectUIProps> = ({width='100%',defValue, options=[{label:'AZ',value:'az'},{label:'RU',value:'ru'},{label:'EN',value:'en'}]}) => {
    return (
        <div style={{width}}>
          <Select
        styles={style}
          defaultValue={defValue||options[0]}
         options={options} />
        </div>
    );
}
 
 
export default ReactSelectUI;