import { useState } from "react";
import axios from "axios";
import OrderPageHeader from "../components/OrderPageHeader";
import { useNavigate } from "react-router-dom";

export default function OrderPage() {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [size, setSize] = useState("");
  const [dough, setDough] = useState("");
  const [extras, setExtras] = useState([]);
  const [note, setNote] = useState("");
  const [quantity, setQuantity] = useState(1);

  const extraList = [
    "Pepperoni","Sosis","Kanada Jambonu",
    "Tavuk Izgara","Soğan","Domates",
    "Mısır","Sucuk","Jalapeno",
    "Sarımsak","Biber","Ananas","Kabak"
  ];

  const basePrice = 85.5;
  const extraPrice = extras.length * 5;
  const total = (basePrice + extraPrice) * quantity;

  // VALIDATION
  const isValid =
    name.length >= 3 &&
    size &&
    dough &&
    extras.length >= 4 &&
    extras.length <= 10;

  const toggleExtra = (item) => {
    if (extras.includes(item)) {
      setExtras(extras.filter((e) => e !== item));
    } else {
      if (extras.length < 10) {
        setExtras([...extras, item]);
      }
    }
  };

  const handleSubmit = async (e) => {
  e.preventDefault();

  const data = {
    name,
    size,
    dough,
    extras,
    note,
    quantity,
    total,
  };

  try {
    const res = await axios.post(
      "https://reqres.in/api/pizza",
      data,
      {
        headers: {
          "x-api-key": "free_user_3DPbAKPWxzigw9BsAMGKT3GTO2n",
          "Content-Type": "application/json",
        },
      }
    );

    // Sipariş özeti
    console.log("Sipariş Özeti:");
    console.log(res.data);
    navigate("/success");

  } catch (err) {
    console.error("HATA ❌", err);
  }
};

  return (
    <div className="bg-white min-h-screen">

      <OrderPageHeader/>

      <form
        onSubmit={handleSubmit}
        className="max-w-xl mx-auto p-6 flex flex-col gap-6"
      >

        <div className="md:col-span-2 space-y-6">

          <h2 className="font-semibold font-barlow text-[22px] text-[#292929]">
            Position Absolute Acı Pizza
          </h2>

          <p className="text-[#5F5F5F]">
            Frontent Dev olarak hala position:absolute kullanıyorsan bu çok acı pizza tam sana göre. Pizza, domates, peynir ve genellikle çeşitli diğer malzemelerle kaplanmış, daha sonra geleneksel olarak odun ateşinde bir fırında yüksek sıcaklıkta pişirilen, genellikle yuvarlak, düzleştirilmiş mayalı buğday bazlı hamurdan oluşan İtalyan kökenli lezzetli bir yemektir.. Küçük bir pizzaya bazen pizzetta denir.
          </p>

          {/* NAME */}
          <div>
            <label className="font-semibold font-barlow text-[20px] text-[#292929]">İsim *</label>
            <input
              className="w-full border p-2 rounded mt-1"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>

          <div className="flex flex-row justify-between">
            {/* SIZE */}
            <div>
              <p className="font-semibold font-barlow text-[20px] text-[#292929]">Boyut Seç *</p>
              {["Küçük","Orta","Büyük"].map((s) => (
                <label key={s} className="block">
                  <input
                    type="radio"
                    name="size"
                    value={s}
                    onChange={(e) => setSize(e.target.value)}
                  /> {s}
                </label>
              ))}
            </div>

            {/* DOUGH */}
            <div>
              <p className="font-semibold font-barlow text-[20px] text-[#292929]">Hamur Seç *</p>
              <select
                className="border p-2 rounded"
                onChange={(e) => setDough(e.target.value)}
              >
                <option value="">Hamur Kalınlığı</option>
                <option>İnce</option>
                <option>Orta</option>
                <option>Kalın</option>
              </select>
            </div>
          </div>

          

          {/* EXTRAS */}
          <div>
            <p className="font-semibold font-barlow text-[20px] text-[#292929]">Ek Malzemeler</p>
            <p className="font-barlow font-medium text-[16px] leading-[56px] text-[#5F5F5F]">En Fazla 10 malzeme seçebilirsiniz. 5₺</p>
            <div className="grid grid-cols-3 gap-2">
              {extraList.map((item) => (
                <label key={item}>
                  <input
                    type="checkbox"
                    checked={extras.includes(item)}
                    onChange={() => toggleExtra(item)}
                  /> {item}
                </label>
              ))}
            </div>
          </div>

          {/* NOTE */}
          <textarea
            placeholder="Sipariş notu..."
            className="w-full border p-2 rounded"
            value={note}
            onChange={(e) => setNote(e.target.value)}
          />

        </div>
        
        {/* PRICE */}
        <div className="flex justify-between items-start gap-6">
          
          {/* QUANTITY */}
          <div className="flex items-center">
            <button
              type="button"
              onClick={() => setQuantity(Math.max(1, quantity - 1))}
              className="bg-[#FDC913] px-4 py-2 rounded-l"
            >
              -
            </button>

            <span className="px-6 py-2 border-t border-b">
              {quantity}
            </span>

            <button
              type="button"
              onClick={() => setQuantity(quantity + 1)}
              className="bg-[#FDC913] px-4 py-2 rounded-r"
            >
              +
            </button>
          </div>

          {/* RIGHT CARD */}
          <div className="bg-white p-6 rounded-lg shadow w-[300px]">
            
            <h3 className="font-semibold mb-4">
              Sipariş Toplamı
            </h3>

            <div className="flex justify-between text-sm text-[#5F5F5F]">
              <span>Seçimler</span>
              <span>{extraPrice.toFixed(2)}₺</span>
            </div>

            <div className="flex justify-between font-bold text-[#CE2829] mt-2">
              <span>Toplam</span>
              <span>{total.toFixed(2)}₺</span>
            </div>

            <button
              disabled={!isValid}
              className={`w-full mt-6 py-3 rounded-lg font-semibold font-barlow text-[18px] text-[#292929]
                ${isValid ? "bg-[#FDC913]" : "bg-gray-300 cursor-not-allowed"}`}
            >
              SİPARİŞ VER
            </button>
          </div>

        </div>
      </form>
    </div>
  );
}