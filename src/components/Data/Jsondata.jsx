
const mensdata = [
    {
        "id": 6,
        "name": "Mens T-shirt",
        "image": "https://ohtopten.com/wp-content/uploads/2015/08/Best-T-shirts-for-men-1.jpg",
        "price": 19.99,
        "productdetails": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut fermentum odio sit amet tellus fringilla, et varius libero malesuada."
      },
      {
        "id": 12,
        "name": "Mens T-shirt",
        "image": "https://www.cottonheritage.com/catImg/WAMHIRES/MC1220_2.jpg",
        "price": 24.99,
        "productdetails": "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam."
      },
      {
        "id": 18,
        "name": "Mens T-shirt",
        "image": "https://cdn.blankstyle.com/files/imagecache/product_full/p_images/10397/MC1050564_1.jpg",
        "price": 14.99,
        "productdetails": "Quisque sit amet purus a lorem tempor dictum. Integer bibendum ligula non nunc mattis, sit amet eleifend odio tristique."
      },
      {
        "id": 24,
        "name": "Mens T-shirt",
        "image": "https://www.theuniformplace.com.au/wp-content/uploads/2018/05/AS-Colour-sport-05.jpg",
        "price": 29.99,
        "productdetails": "Fusce vel nulla at risus tristique efficitur. Donec lobortis erat vel ante vestibulum, eget malesuada enim malesuada."
      },
      {
        "id": 30,
        "name": "Product 5",
        "image": "https://cdn.shopify.com/s/files/1/0517/6311/8266/products/RM61_400x.jpg?v=1677181329",
        "price": 39.99,
        "productdetails": "Integer in justo sed magna interdum fringilla. Sed non est id velit eleifend rutrum nec vel leo."
      },
      {
        "id": 36,
        "name": "Product 6",
        "image": "https://blanktees.co.nz/img/products/resized/gildan-65000-softsyle-midweight-tee_504_636_85_1683680678.jpg",
        "price": 49.99,
        "productdetails": "Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Proin sed luctus velit."
      },
      {
        "id": 42,
        "name": "Product 7",
        "image": "https://cdn.shopify.com/s/files/1/0087/9706/1216/products/AB_0692_copy.jpg?v=1557548068",
        "price": 9.99,
        "productdetails": "Curabitur nec risus vitae metus interdum accumsan. Integer auctor odio eget justo vestibulum, sed mattis ligula varius."
      },
      {
        "id": 48,
        "name": "Mens Navy T-shirt",
        "image": "https://www.myamericanheartrock.com/media/catalog/product/cache/1/image/650x/040ec09b1e35df139433887a97daa66f/b/a/basic_t_shirts_heren-073vjh.jpg",
        "price": 34.99,
        "productdetails": "Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Maecenas convallis justo a dui faucibus, in maximus urna tristique."
      },
      {
        "id": 54,
        "name": "Product 9",
        "image": "https://th.bing.com/th/id/OIP.Uwp2cLbqZVrOwcTFfRP8UAHaJQ?rs=1&pid=ImgDetMain",
        "price": 19.99,
        "productdetails": "Vivamus euismod odio eget ante fermentum, at laoreet nulla pharetra. Nam accumsan erat et purus suscipit, vel congue ex euismod."
      },
      {
        "id": 60,
        "name": "Product 10",
        "image": "https://cdn.ssactivewear.com/Images/Style/10534_fl.jpg",
        "price": 29.99,
        "productdetails": "Donec vehicula ex sit amet arcu ultrices, sed varius nulla tempor. Nunc sed enim quis metus commodo tristique nec vel elit."
      },
      {
        "id": 66,
        "name": "Product 11",
        "image": "https://www.nyfifth.com/category/20190523/560mr_c2_z.jpg",
        "price": 39.99,
        "productdetails": "Aliquam eleifend mi vel nunc accumsan, sed commodo nisi dapibus. Praesent interdum eros nec nisi blandit, sit amet varius velit venenatis."
      },
      {
        "id": 72,
        "name": "Product 12",
        "image": "https://www.statononline.com/images/hires/64000-DARKHEATHER.jpg",
        "price": 49.99,
        "productdetails": "Duis eu nisi id dui volutpat rutrum. Nulla eu ex id justo commodo rhoncus id id purus."
      },
      {
        "id": 78,
        "name": "Product 13",
        "image": "https://th.bing.com/th/id/R.fd0ecf9c9b6212134c58bd827df16090?rik=y2KyyAxXceM8vw&riu=http%3a%2f%2fwww.transparentturtlegraphics.com%2fuploads%2f3%2f7%2f4%2f7%2f37472001%2fs831786404800796530_p193_i2_w640.jpeg&ehk=CWUUsQQw%2bPo3VK37RHm5bM%2bzNu2VgnbPlGrRiCvrPa0%3d&risl=&pid=ImgRaw&r=0",
        "price": 59.99,
        "productdetails": "Suspendisse potenti. Aliquam ut risus scelerisque, tempor enim sit amet, lacinia sem. Curabitur id turpis in metus dignissim elementum."
      },
      {
        "id": 84,
        "name": "Product 14",
        "image": "https://www.rw-co.com/on/demandware.static/-/Sites-Rwco-master-catalog/default/dwae5e7d38/images/xlarge/rwco_434762_437_0.jpg",
        "price": 69.99,
        "productdetails": "Fusce consequat quam nec velit auctor, eu dignissim sapien pulvinar. Sed non nisi convallis, ullamcorper purus a, tincidunt sapien."
      },
      {
        "id": 90,
        "name": "Product 15",
        "image": "https://www.keepshooting.com/media/catalog/product/cache/f7b906d53d787e3daacd095a2c7fcc0e/h/a/hanes-elevated-tee-black-heather-triblend.jpg",
        "price": 79.99,
        "productdetails": "Praesent non ex at risus ullamcorper pellentesque. Nulla a nunc eget metus pretium bibendum. Vestibulum ac ex ut augue vestibulum scelerisque nec id ex."
      }
]

export default mensdata