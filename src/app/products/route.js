import { NextResponse } from "next/server";

const products = [
    {
        id: 1,
        name: "Tulips Mix",
        price: 35.98,
        slug: "tulips-mix",
        image: "https://storage.florist.ru/cdn-cgi/image/format=webp/f/get/content/bouquet-list/16/70/_8b077f98ae7a043cdcc006bbf192/180x180/653a10363dd38.jpg",
    },
    {
        id: 2,
        name: 'Bouquet "La Gioconda"',
        price: 51.99,
        slug: "bouquet-la-gioconda",
        image: "https://storage.florist.ru/cdn-cgi/image/format=webp/f/get/iflorist/product/O/V/_dPZ3A4SWxNeDhsZ2pKd0RLVFUyVHprYnliVjdxSGo1eE42bFVlOE9FZTFOYnJYbDNoRktYZStLQUs2OG13a0NGNXhITnQrcWVzL2REQjc0MFIwa2dRaUtaT08zSlNUb0RJWHpWdlRZNVFJcFdpSnJRUlBQYlltOUgvNWhwNTF3Um1KaVhoQlpHbzZBNE5KdG10T0pBPT0=/180x180/img.jpg",
    },
    {
        id: 3,
        name: "Bouquet of spray roses with wheat",
        price: 31.51,
        slug: "bouquet-of-spray-roses-with-wheat",
        image: "https://storage.florist.ru/cdn-cgi/image/format=webp/f/get/iflorist/product/O/V/_dPZ3A4SWxNeDhsZ2pKd0RLVFUyVHprYnliVjdxSGo1eE42bFVlOE9FZTFOYnJYbDNoRktYZStLQUs2OG13a3ZBUFlUZEovaWc5dzN4SmVjSTQ0RE1vcHB1UUgrRGIybXVMVmIweHZHVWxSM1dqN0FPNFVaNjJUTjVJY1ViY3F3Um1KaVhoQlpHbzZBNE5KdG10T0pBPT0=/270x270/img.jpg",
    },
    {
        id: 4,
        name: "101 and 151 Ruby Rose",
        price: 91.49,
        slug: "101-and-151-ruby-rose",
        image: "https://storage.florist.ru/cdn-cgi/image/format=webp/f/get/content/bouquet-list/25/57/_cf87d76c90f3ad89b35b9ef4cd59/270x270/647dde02ac175.jpg",
    },
    {
        id: 5,
        name: "Magnetic Lapis Lazuli",
        price: 81.24,
        slug: "magnetic-lapis-lazuli",
        image: "https://storage.florist.ru/cdn-cgi/image/format=webp/f/get/content/bouquet-list/42/5f/_aa76c28e8e78a511aae29733a2bd/180x180/6474a1f9d61ce.jpg",
    },
    {
        id: 6,
        name: "Box with flowers sweet Juliet",
        price: 45.9,
        slug: "box-with-flowers-sweet-juliet",
        image: "https://storage.florist.ru/cdn-cgi/image/format=webp/f/get/iflorist/product/O/V/_dPZ3A4SWxNeDhsZ2pKd0RLVFUyVHprYnliVjdxSGo1eE42bFVlOE9FZTFOYnJYbDNoRktYZStLQUs2OG13a045UHAxeFd2MmFwNjNqbnVBNFZZSm9ZUStjYUhYdWQwZG52cnFza05uZ0VXT0ZBSldHL1F0c1d0SGZNdVJKTVp3Um1KaVhoQlpHbzZBNE5KdG10T0pBPT0=/270x270/img.jpg",
    },
    {
        id: 7,
        name: 'Bouquet "Cleopatra"',
        price: 46.45,
        slug: "bouquet-cleopatra",
        image: "https://storage.florist.ru/cdn-cgi/image/format=webp/f/get/iflorist/product/O/V/_dPZ3A4SWxNeDhsZ2pKd0RLVFUyVHprYnliVjdxSGo1eE42bFVlOE9FZTFOYnJYbDNoRktYZStLQUs2OG13a3IvMXl5SDhsdWIwU0x5alA2b2NFMW1xUUFLbXZnS0RROUxqZStqSGVXektTNElVTVlHaUVKNzRUcWVOc0NTRm53Um1KaVhoQlpHbzZBNE5KdG10T0pBPT0=/270x270/img.jpg",
    },
    {
        id: 8,
        name: "Delicate bouquet Persian",
        price: 43.07,
        slug: "delicate-bouquet-persian",
        image: "https://storage.florist.ru/cdn-cgi/image/format=webp/f/get/iflorist/product/O/V/_dPZ3A4SWxNeDhsZ2pKd0RLVFUyVHprYnliVjdxSGo1eE42bFVlOE9FZTFOYnJYbDNoRktYZStLQUs2OG13a3RmR0kvZFlTSGxlWGlUdFFEQ1BpUDNFcHVmQ3RWdXdZMG9SOTM1L0w3YmxkeFVEUVNzOHVYRlVuL3ZUd3FUTDF3Um1KaVhoQlpHbzZBNE5KdG10T0pBPT0=/270x270/img.jpg",
    },
    {
        id: 9,
        name: "Raspberry Pudding",
        price: 90.82,
        slug: "raspberry-pudding",
        image: "https://storage.florist.ru/cdn-cgi/image/format=webp/f/get/content/bouquet-list/ae/0d/_db627b3b8f4fcf2b5c67a534a30d/270x270/647d8ecb29688.jpg",
    },
    {
        id: 10,
        name: "Holiday Magic",
        price: 85.17,
        slug: "holiday-magic",
        image: "https://storage.florist.ru/cdn-cgi/image/format=webp/f/get/content/bouquet-list/3c/53/_e6514d0f4231f0691c619bc8e860/270x270/6391a943e36f8.jpg",
    },
];

export async function GET() {
    return NextResponse.json(products, { status: 200 });
}
