import React, { useState } from "react";
const App = () => {
  const [value, setValue] = useState("");
  const [send, setSend] = useState(false);
  const [error, setError] = useState(false);

  const handleValue = (e) => {
    setValue(e.target.value);
    setSend(false)
    setError(false)
  };
  const handleAddText = (e) => {
    e.preventDefault();
   console.log(value)
    setValue("");
    setSend(true)
  };
  const handleBlur = () => {
    if(!value){
        setError(true)
        setSend(false)
    }
  }
  return (
    <>
      <form onSubmit={handleAddText}>
        <input className={error && 'inputText'} value={value} onChange={handleValue} onBlur={handleBlur}/>
        <button type="submit" disabled={!value}>
          add
        </button>
      </form>
      {send && <div className={send && 'addText'}>Сообщение отправлено</div>}
      {error && <div className="input">Поле ввода не должно быть пустым!</div>}
    </>
  );
};
export default App;
