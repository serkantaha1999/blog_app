admin = User.create(email: 'test@test.com', password: '12345678', role: 1)

authors = ['Khrystyna Mykol', 'Oleksii Loren', 'Dasha Ov', 'Ostap Nerdenko', 'Bodya Kotenko']
json_data = <<JSON
{
  "news": [
    {
      "imageUrl": "/assets/images/blog-news/01.webp",
      "title": "Electric Cupra Formentor and larger SUV",
      "text": "Cupra has announced it will launch a battery-powered successor to the Formentor, along with a bigger electric SUV, later this decade"
    },
    {
      "imageUrl": "/assets/images/blog-news/02.webp",
      "title": "How to drive like an F1 pro",
      "text": "What does it take to extract every last bit of performance from the world’s ultimate race car? Nico Rosberg explains the art of F1 driving on the limit."
    },
    {
      "imageUrl": "/assets/images/blog-news/03.webp",
      "title": "2024 GWM Tank 500 review",
      "text": "GWM expands it Tank 4x4 range with the luxurious 500 wagon"
    },
    {
      "imageUrl": "/assets/images/blog-news/04.webp",
      "title": "New Car or Used Car: Pros and Cons to buying second-hand",
      "text": "We help you weigh up the pros and cons of buying a brand new car against buying a used car"
    },
    {
      "imageUrl": "/assets/images/blog-news/05.webp",
      "title": "ENRIGHT: The trouble with buying and selling used cars in 2022",
      "text": "There are people buying used cars right now who are about to take an enormous bath."
    },
    {
      "imageUrl": "/assets/images/blog-news/06.webp",
      "title": "Why all-wheel drive is a must for performance EVs",
      "text": "Traction? Speed? Those are just some of the reasons to choose AWD."
    },
    {
      "imageUrl": "/assets/images/blog-news/07.webp",
      "title": "New Vehicle Efficiency Standard may not increase car prices as far as industry has Suggested",
      "text": "Car brands support NVES. FCAI not so much."
    },
    {
      "imageUrl": "/assets/images/blog-news/08.webp",
      "title": "Toyota LandCruiser 300 Series chopped and transformed into mind-blowing ute",
      "text": "Who said you can’t make a good thing much, much better?"
    },
    {
      "imageUrl": "/assets/images/blog-news/09.webp",
      "title": "Opinion: Can a car ever truly be unsellable?",
      "text": "Affat ponders the emotional weight of being asked to sell the car he planned to own forever"
    },
    {
      "imageUrl": "/assets/images/blog-news/10.webp",
      "title": "2023 Ford Ranger build: Job done!",
      "text": "We wrap up the build of our Ford Ranger Sport and look back at all the awesome gear that’s been fitted to it"
    },
    {
      "imageUrl": "/assets/images/blog-news/11.webp",
      "title": "Should you buy a used EV? Depreciation & checklist guide",
      "text": "Want to buy a cheaper electric car? A used example might be the answer, but there are a few things to consider first"
    },
    {
      "imageUrl": "/assets/images/blog-news/12.webp",
      "title": "2024 BMW M2 manual vs Toyota GR Supra manual comparison",
      "text": "Straight-sixes, six-speed manuals and rear-wheel drive – it doesn’t get much better than this, especially when one costs quite a bit less than the other"
    }
  ]
}
JSON

parsed_data = JSON.parse(json_data)

parsed_data['news'].each do |article_data|
  article = Article.create(
    title: article_data['title'],
    content: article_data['text'],
    image: File.open("app#{article_data['imageUrl']}"),
    user_id: admin.id
  )

  5.times do |i|
    Comment.create(
      author: authors[i],
      content: 'So interesting article',
      article_id: article.id
    )
  end
end
