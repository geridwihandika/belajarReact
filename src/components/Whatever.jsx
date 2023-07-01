import { useState } from "react";
export default function Whatever() {
  const [input, setInput] = useState("Awalan,,,");

  const handleInput = (e) => {
    setInput(e.target.value);
  };
  //   const [count, setCount] = useState(0);

  //   const tambah = ()=> {
  //     setCount(count + 1)
  //   }

  //   const kurang = ()=> {
  //     setCount(count - 1)
  //   }

  const datas = [
    {
      id: 1,
      nameProduct: "Baju Koko",
      jumlah: "10",
      img: "https://picsum.photos/200/300"
    },
    {
      id: 2,
      nameProduct: "Baju Kemeja",
      jumlah: "14",
      img: "https://picsum.photos/200/300"
    },
    {
      id: 3,
      nameProduct: "Baju renang",
      jumlah: "9",
      img: "https://picsum.photos/200/300"
    },
  ];

  console.log("test", datas);

  return (
    <div>
      <center>
        <input placeholder="sini ketik.." onChange={handleInput} />
        <h1>{input}</h1>

        {/* <h1>Count:{count} </h1>
        <button className="bg-amber-300" onClick={tambah}>Tambah</button>
        <button className="bg-slate-700" onClick={kurang}>Kurang</button> */}
      </center>
      <div>
        <center>
          {datas.map((item) => (
            <>
              <h1 key={item.id}>nama : {item.nameProduct}</h1>
              <h1 key={item.id}>Jumlah :{item.jumlah}</h1>
              <img src={item.img}/>
            </>
          ))}
        </center>
      </div>
    </div>
  );
}
