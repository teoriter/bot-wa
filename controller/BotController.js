const { Controller, Response } = require("pepesan");
const f = require("../utils/Formatter");

module.exports = class BotController extends Controller {

  async introduction(request) {
    return this.reply("halo saya adalah ALEXBOT yang dirancang oleh owner saya fadhil pratama untuk menjadi asisten TEOBOT, saat ini TEOBOT sedang tidak aktif atau berada di luar jangkauan silahkan hubungi beberapa saat lagi. sekedar info nomor ini memiliki 3 bot sekaligus dengan gaya balasan yang berbeda beda, adapun jenisnya adalah TEOBOT, ALEXBOT, dan GACORBOT.")
  }
}
//     async introduction(request) {
//       return Response.menu.fromArrayOfString(
//         [
//           f("menu.daftarProduk"),
//           f("menu.alamatKantor")
//         ],
//         f("intro", [request.name]),
//         f("template.menu")
//       );
//     }

//     async product(request) {
//       return this.reply("Ini produk digital saya, bisa dikunjungi di http://dewakoding.com")
//     }

//     async alamatKantor(request) {
//       return this.reply("Alamat kantor kami ada di Jakarta")
//     }

// }


//untuk ngerunning si terminal
//npm run dev