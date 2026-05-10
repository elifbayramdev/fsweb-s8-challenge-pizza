import HomeFooter from "./HomeFooter";

export default function SuccessPage({ orderResponse }) {
  const sizeMap = {
    Küçük: "S",
    Orta: "M",
    Büyük: "L",
  };
  return (
    <>
    <div className="bg-[#CE2829] min-h-screen flex flex-col text-white">

      <div className="text-center py-6 text-2xl font-bold">
        Teknolojik Yemekler
      </div>

      <div className="flex-1 flex flex-col items-center justify-center">
        <p className="font-satisfy text-[#FDC913] text-[32px]">lezzetin yolda</p>
        <h1 className="pb-10 border-b border-white font-sans text-[86px] text-center font-light uppercase">
          SİPARİŞİN ALINDI {orderResponse.name}!
        </h1>
        <p className="pt-10 font-barlow text-white text-[22px] font-semibold">Position Absolute Acı Pizza</p>

        <div className="mt-10 text-lg text-start mb-14">
          {orderResponse ? (
            <>
              <div className=" max-w-56 flex flex-col justify-around">
                <p className="font-barlow font-normal text-[22px]">Sipariş Numarası: <span className="font-barlow font-bold text-[22px]">{orderResponse.id}</span></p>
                <br />
                <p className="font-barlow font-normal text-[16px]">Boyut: <span className="font-barlow font-bold text-[16px]">{sizeMap[orderResponse.size]}</span> </p>
                <br />
                <p className="font-barlow font-normal text-[16px]">Hamur: <span className="font-barlow font-bold text-[16px]">{orderResponse.dough}</span></p>
                <br />
                <p className="font-barlow font-normal text-[16px]">Ek Malzemeler: <span className="font-barlow font-bold text-[16px]">{orderResponse.extras.join(", ")}</span></p>
                <br />
              </div>


              <div className="border rounded-md py-6 px-12 border-white flex flex-col justify-between min-w-72">
                <p>Sipariş Toplamı</p>
                <br />
                <div className="pb-4 flex justify-between">
                  <p>Seçimler:</p>
                  <p>{orderResponse.total - 85.50*orderResponse.quantity}₺</p>
                </div>
                <div className="pb-4 flex justify-between">
                  <p>Toplam:</p>
                  <p>{orderResponse.total}₺</p>
                </div>
              </div>
              
            </>
          ) : (
            <p>Henüz sipariş verisi yok</p>
          )}
        </div>

      </div>
    </div>
    <HomeFooter/>
    </>
    
  );
}