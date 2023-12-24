import { NextResponse } from "next/server";

const products = [
    {
        id: 1,
        name: "Tulips Mix",
        price: 35.98,
        slug: "tulips-mix",
        description:
            "flower, Reproductive portion of any flowering plant (angiosperm). Popularly, the term applies especially when part or all of the reproductive structure is distinctive in colour and form. Flowers present a multitude of combinations of colour, size, form, and anatomical arrangement. In some plants, individual flowers are very small and are borne in a distinctive cluster (inflorescence). Each flower consists of a floral axis that bears the essential organs of reproduction (male stamens and/or female pistils) and usually accessory organs (sepals and petals); the latter may serve both to attract pollinating insects (see pollination) and to protect the essential organs.",
        image: "https://storage.florist.ru/cdn-cgi/image/format=webp/f/get/content/bouquet-list/16/70/_8b077f98ae7a043cdcc006bbf192/180x180/653a10363dd38.jpg",
        image_lg:
            "https://storage.florist.ru/cdn-cgi/image/format=webp/f/get/content/bouquet/76/96/_dc66818139260240b6bfbfdb60fc/800x800/63f4b53d68aee.jpg",
    },
    {
        id: 2,
        name: 'Bouquet "La Gioconda"',
        price: 51.99,
        slug: "bouquet-la-gioconda",
        description:
            "flower, Reproductive portion of any flowering plant (angiosperm). Popularly, the term applies especially when part or all of the reproductive structure is distinctive in colour and form. Flowers present a multitude of combinations of colour, size, form, and anatomical arrangement. In some plants, individual flowers are very small and are borne in a distinctive cluster (inflorescence). Each flower consists of a floral axis that bears the essential organs of reproduction (male stamens and/or female pistils) and usually accessory organs (sepals and petals); the latter may serve both to attract pollinating insects (see pollination) and to protect the essential organs.",
        image: "https://storage.florist.ru/cdn-cgi/image/format=webp/f/get/iflorist/product/O/V/_dPZ3A4SWxNeDhsZ2pKd0RLVFUyVHprYnliVjdxSGo1eE42bFVlOE9FZTFOYnJYbDNoRktYZStLQUs2OG13a0NGNXhITnQrcWVzL2REQjc0MFIwa2dRaUtaT08zSlNUb0RJWHpWdlRZNVFJcFdpSnJRUlBQYlltOUgvNWhwNTF3Um1KaVhoQlpHbzZBNE5KdG10T0pBPT0=/180x180/img.jpg",
        image_lg:
            "https://storage.florist.ru/cdn-cgi/image/format=webp/f/get/iflorist/product/O/V/_dPZ3A4SWxNeDhsZ2pKd0RLVFUyVHprYnliVjdxSGo1eE42bFVlOE9FZTFOYnJYbDNoRktYZStLQUs2OG13a0NGNXhITnQrcWVzL2REQjc0MFIwa2dRaUtaT08zSlNUb0RJWHpWdlRZNVFJcFdpSnJRUlBQYlltOUgvNWhwNTF3Um1KaVhoQlpHbzZBNE5KdG10T0pBPT0=/800x800/img.jpg",
    },
    {
        id: 3,
        name: "Bouquet of spray roses with wheat",
        price: 31.51,
        slug: "bouquet-of-spray-roses-with-wheat",
        description:
            "flower, Reproductive portion of any flowering plant (angiosperm). Popularly, the term applies especially when part or all of the reproductive structure is distinctive in colour and form. Flowers present a multitude of combinations of colour, size, form, and anatomical arrangement. In some plants, individual flowers are very small and are borne in a distinctive cluster (inflorescence). Each flower consists of a floral axis that bears the essential organs of reproduction (male stamens and/or female pistils) and usually accessory organs (sepals and petals); the latter may serve both to attract pollinating insects (see pollination) and to protect the essential organs.",
        image: "https://storage.florist.ru/cdn-cgi/image/format=webp/f/get/iflorist/product/O/V/_dPZ3A4SWxNeDhsZ2pKd0RLVFUyVHprYnliVjdxSGo1eE42bFVlOE9FZTFOYnJYbDNoRktYZStLQUs2OG13a3ZBUFlUZEovaWc5dzN4SmVjSTQ0RE1vcHB1UUgrRGIybXVMVmIweHZHVWxSM1dqN0FPNFVaNjJUTjVJY1ViY3F3Um1KaVhoQlpHbzZBNE5KdG10T0pBPT0=/270x270/img.jpg",
        image_lg:
            "https://storage.florist.ru/cdn-cgi/image/format=webp/f/get/iflorist/product/O/V/_dPZ3A4SWxNeDhsZ2pKd0RLVFUyVHprYnliVjdxSGo1eE42bFVlOE9FZTFOYnJYbDNoRktYZStLQUs2OG13a3ZBUFlUZEovaWc5dzN4SmVjSTQ0RE1vcHB1UUgrRGIybXVMVmIweHZHVWxSM1dqN0FPNFVaNjJUTjVJY1ViY3F3Um1KaVhoQlpHbzZBNE5KdG10T0pBPT0=/800x800/img.jpg",
    },
    {
        id: 4,
        name: "101 and 151 Ruby Rose",
        price: 91.49,
        slug: "101-and-151-ruby-rose",
        description:
            "flower, Reproductive portion of any flowering plant (angiosperm). Popularly, the term applies especially when part or all of the reproductive structure is distinctive in colour and form. Flowers present a multitude of combinations of colour, size, form, and anatomical arrangement. In some plants, individual flowers are very small and are borne in a distinctive cluster (inflorescence). Each flower consists of a floral axis that bears the essential organs of reproduction (male stamens and/or female pistils) and usually accessory organs (sepals and petals); the latter may serve both to attract pollinating insects (see pollination) and to protect the essential organs.",
        image: "https://storage.florist.ru/cdn-cgi/image/format=webp/f/get/content/bouquet-list/25/57/_cf87d76c90f3ad89b35b9ef4cd59/270x270/647dde02ac175.jpg",
        image_lg:
            "https://storage.florist.ru/cdn-cgi/image/format=webp/f/get/content/bouquet/80/e6/_cb4fa97ac146294b81cf047f7fc9/800x800/63f4b0fe6b337.jpg",
    },
    {
        id: 5,
        name: "Magnetic Lapis Lazuli",
        price: 81.24,
        slug: "magnetic-lapis-lazuli",
        description:
            "flower, Reproductive portion of any flowering plant (angiosperm). Popularly, the term applies especially when part or all of the reproductive structure is distinctive in colour and form. Flowers present a multitude of combinations of colour, size, form, and anatomical arrangement. In some plants, individual flowers are very small and are borne in a distinctive cluster (inflorescence). Each flower consists of a floral axis that bears the essential organs of reproduction (male stamens and/or female pistils) and usually accessory organs (sepals and petals); the latter may serve both to attract pollinating insects (see pollination) and to protect the essential organs.",
        image: "https://storage.florist.ru/cdn-cgi/image/format=webp/f/get/content/bouquet-list/42/5f/_aa76c28e8e78a511aae29733a2bd/180x180/6474a1f9d61ce.jpg",
        image_lg:
            "https://storage.florist.ru/cdn-cgi/image/format=webp/f/get/content/bouquet/e7/28/_fdc85257245e49bfb3c3e711940d/800x800/646cabc2cab38.jpg",
    },
    {
        id: 6,
        name: "Box with flowers sweet Juliet",
        price: 45.9,
        slug: "box-with-flowers-sweet-juliet",
        description:
            "flower, Reproductive portion of any flowering plant (angiosperm). Popularly, the term applies especially when part or all of the reproductive structure is distinctive in colour and form. Flowers present a multitude of combinations of colour, size, form, and anatomical arrangement. In some plants, individual flowers are very small and are borne in a distinctive cluster (inflorescence). Each flower consists of a floral axis that bears the essential organs of reproduction (male stamens and/or female pistils) and usually accessory organs (sepals and petals); the latter may serve both to attract pollinating insects (see pollination) and to protect the essential organs.",
        image: "https://storage.florist.ru/cdn-cgi/image/format=webp/f/get/iflorist/product/O/V/_dPZ3A4SWxNeDhsZ2pKd0RLVFUyVHprYnliVjdxSGo1eE42bFVlOE9FZTFOYnJYbDNoRktYZStLQUs2OG13a045UHAxeFd2MmFwNjNqbnVBNFZZSm9ZUStjYUhYdWQwZG52cnFza05uZ0VXT0ZBSldHL1F0c1d0SGZNdVJKTVp3Um1KaVhoQlpHbzZBNE5KdG10T0pBPT0=/270x270/img.jpg",
        image_lg:
            "https://storage.florist.ru/cdn-cgi/image/format=webp/f/get/iflorist/product/O/V/_dPZ3A4SWxNeDhsZ2pKd0RLVFUyVHprYnliVjdxSGo1eE42bFVlOE9FZTFOYnJYbDNoRktYZStLQUs2OG13a045UHAxeFd2MmFwNjNqbnVBNFZZSm9ZUStjYUhYdWQwZG52cnFza05uZ0VXT0ZBSldHL1F0c1d0SGZNdVJKTVp3Um1KaVhoQlpHbzZBNE5KdG10T0pBPT0=/800x800/img.jpg",
    },
    {
        id: 7,
        name: 'Bouquet "Cleopatra"',
        price: 46.45,
        slug: "bouquet-cleopatra",
        description:
            "flower, Reproductive portion of any flowering plant (angiosperm). Popularly, the term applies especially when part or all of the reproductive structure is distinctive in colour and form. Flowers present a multitude of combinations of colour, size, form, and anatomical arrangement. In some plants, individual flowers are very small and are borne in a distinctive cluster (inflorescence). Each flower consists of a floral axis that bears the essential organs of reproduction (male stamens and/or female pistils) and usually accessory organs (sepals and petals); the latter may serve both to attract pollinating insects (see pollination) and to protect the essential organs.",
        image: "https://storage.florist.ru/cdn-cgi/image/format=webp/f/get/iflorist/product/O/V/_dPZ3A4SWxNeDhsZ2pKd0RLVFUyVHprYnliVjdxSGo1eE42bFVlOE9FZTFOYnJYbDNoRktYZStLQUs2OG13a3IvMXl5SDhsdWIwU0x5alA2b2NFMW1xUUFLbXZnS0RROUxqZStqSGVXektTNElVTVlHaUVKNzRUcWVOc0NTRm53Um1KaVhoQlpHbzZBNE5KdG10T0pBPT0=/270x270/img.jpg",
        image_lg:
            "https://storage.florist.ru/cdn-cgi/image/format=webp/f/get/iflorist/product/O/V/_dPZ3A4SWxNeDhsZ2pKd0RLVFUyVHprYnliVjdxSGo1eE42bFVlOE9FZTFOYnJYbDNoRktYZStLQUs2OG13a3IvMXl5SDhsdWIwU0x5alA2b2NFMW1xUUFLbXZnS0RROUxqZStqSGVXektTNElVTVlHaUVKNzRUcWVOc0NTRm53Um1KaVhoQlpHbzZBNE5KdG10T0pBPT0=/800x800/img.jpg",
    },
    {
        id: 8,
        name: "Delicate bouquet Persian",
        price: 43.07,
        slug: "delicate-bouquet-persian",
        description:
            "flower, Reproductive portion of any flowering plant (angiosperm). Popularly, the term applies especially when part or all of the reproductive structure is distinctive in colour and form. Flowers present a multitude of combinations of colour, size, form, and anatomical arrangement. In some plants, individual flowers are very small and are borne in a distinctive cluster (inflorescence). Each flower consists of a floral axis that bears the essential organs of reproduction (male stamens and/or female pistils) and usually accessory organs (sepals and petals); the latter may serve both to attract pollinating insects (see pollination) and to protect the essential organs.",
        image: "https://storage.florist.ru/cdn-cgi/image/format=webp/f/get/iflorist/product/O/V/_dPZ3A4SWxNeDhsZ2pKd0RLVFUyVHprYnliVjdxSGo1eE42bFVlOE9FZTFOYnJYbDNoRktYZStLQUs2OG13a3RmR0kvZFlTSGxlWGlUdFFEQ1BpUDNFcHVmQ3RWdXdZMG9SOTM1L0w3YmxkeFVEUVNzOHVYRlVuL3ZUd3FUTDF3Um1KaVhoQlpHbzZBNE5KdG10T0pBPT0=/270x270/img.jpg",
        image_lg:
            "https://storage.florist.ru/cdn-cgi/image/format=webp/f/get/iflorist/product/O/V/_dPZ3A4SWxNeDhsZ2pKd0RLVFUyVHprYnliVjdxSGo1eE42bFVlOE9FZTFOYnJYbDNoRktYZStLQUs2OG13a3RmR0kvZFlTSGxlWGlUdFFEQ1BpUDNFcHVmQ3RWdXdZMG9SOTM1L0w3YmxkeFVEUVNzOHVYRlVuL3ZUd3FUTDF3Um1KaVhoQlpHbzZBNE5KdG10T0pBPT0=/800x800/img.jpg",
    },
    {
        id: 9,
        name: "Raspberry Pudding",
        price: 90.82,
        slug: "raspberry-pudding",
        description:
            "flower, Reproductive portion of any flowering plant (angiosperm). Popularly, the term applies especially when part or all of the reproductive structure is distinctive in colour and form. Flowers present a multitude of combinations of colour, size, form, and anatomical arrangement. In some plants, individual flowers are very small and are borne in a distinctive cluster (inflorescence). Each flower consists of a floral axis that bears the essential organs of reproduction (male stamens and/or female pistils) and usually accessory organs (sepals and petals); the latter may serve both to attract pollinating insects (see pollination) and to protect the essential organs.",
        image: "https://storage.florist.ru/cdn-cgi/image/format=webp/f/get/content/bouquet-list/ae/0d/_db627b3b8f4fcf2b5c67a534a30d/270x270/647d8ecb29688.jpg",
        image_lg:
            "https://storage.florist.ru/cdn-cgi/image/format=webp/f/get/content/bouquet/9b/b7/_ee2ca5d54e6565ef0033a27ac450/800x800/647d9090ac409.jpg",
    },
    {
        id: 10,
        name: "Holiday Magic",
        price: 85.17,
        slug: "holiday-magic",
        description:
            "flower, Reproductive portion of any flowering plant (angiosperm). Popularly, the term applies especially when part or all of the reproductive structure is distinctive in colour and form. Flowers present a multitude of combinations of colour, size, form, and anatomical arrangement. In some plants, individual flowers are very small and are borne in a distinctive cluster (inflorescence). Each flower consists of a floral axis that bears the essential organs of reproduction (male stamens and/or female pistils) and usually accessory organs (sepals and petals); the latter may serve both to attract pollinating insects (see pollination) and to protect the essential organs.",
        image: "https://storage.florist.ru/cdn-cgi/image/format=webp/f/get/content/bouquet-list/3c/53/_e6514d0f4231f0691c619bc8e860/270x270/6391a943e36f8.jpg",
        image_lg:
            "https://storage.florist.ru/cdn-cgi/image/format=webp/f/get/content/bouquet/2e/e3/_c9043586da61f21122e237a28b57/800x800/63918f65c376d.jpg",
    },
];

export async function GET() {
    return NextResponse.json(products, { status: 200 });
}
