import { motion } from "framer-motion";
import { Card, CardBody, Button, Input } from "@nextui-org/react";
import {
  MagnifyingGlassIcon,
  CalendarIcon,
  UserIcon,
} from "@heroicons/react/24/outline";

export default function Blog() {
  const blogPosts = [
    {
      id: 1,
      title: "10 Best Summer Recipes",
      category: "Recipes",
      date: "June 15, 2024",
      author: "Chef John",
      image: "/frontend_assets/special_1.jpg",
      excerpt:
        "Discover refreshing and delicious recipes perfect for summer...",
      readTime: "5 min read",
    },
    {
      id: 2,
      title: "Healthy Eating Guide",
      category: "Health",
      date: "June 12, 2024",
      author: "Nutritionist Sarah",
      image: "/frontend_assets/special_2.jpg",
      excerpt:
        "Learn about maintaining a balanced diet with our comprehensive guide...",
      readTime: "8 min read",
    },
    // Add more blog posts...
  ];

  const categories = [
    { name: "Recipes", count: 15 },
    { name: "Health", count: 8 },
    { name: "Tips & Tricks", count: 12 },
    { name: "Restaurant News", count: 6 },
  ];

  return (
    <div className="min-h-screen">
      {/* Blog Hero Section */}
      <section className="relative h-[50vh] bg-black">
        <div className="absolute inset-0">
          <img
            src="/frontend_assets/menu_header_image.jpg"
            alt="Blog Header"
            className="w-full h-full object-cover opacity-40"
          />
        </div>
        <div className="relative z-10 h-full flex items-center justify-center text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-3xl px-4"
          >
            <h1 className="text-5xl font-bold text-white mb-4">Food Blog</h1>
            <p className="text-xl text-gray-200">
              Discover culinary stories, tips, and recipes
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-16 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Main Content */}
            <div className="lg:col-span-2">
              <div className="grid gap-8">
                {blogPosts.map((post, index) => (
                  <motion.div
                    key={post.id}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <Card className="hover:shadow-lg transition-shadow">
                      <CardBody className="p-0">
                        <div className="grid md:grid-cols-2 gap-6">
                          <img
                            src={post.image}
                            alt={post.title}
                            className="w-full h-64 object-cover"
                          />
                          <div className="p-6">
                            <span className="text-primary text-sm font-medium">
                              {post.category}
                            </span>
                            <h2 className="text-2xl font-bold mt-2 mb-3">
                              {post.title}
                            </h2>
                            <p className="text-gray-600 mb-4">{post.excerpt}</p>
                            <div className="flex items-center gap-4 text-sm text-gray-500 mb-4">
                              <div className="flex items-center gap-1">
                                <CalendarIcon className="w-4 h-4" />
                                {post.date}
                              </div>
                              <div className="flex items-center gap-1">
                                <UserIcon className="w-4 h-4" />
                                {post.author}
                              </div>
                            </div>
                            <Button color="primary" variant="flat" size="sm">
                              Read More
                            </Button>
                          </div>
                        </div>
                      </CardBody>
                    </Card>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Sidebar */}
            <div className="space-y-8">
              {/* Search */}
              <Card>
                <CardBody className="p-6">
                  <Input
                    placeholder="Search articles..."
                    startContent={
                      <MagnifyingGlassIcon className="w-5 h-5 text-gray-400" />
                    }
                    type="text"
                  />
                </CardBody>
              </Card>

              {/* Categories */}
              <Card>
                <CardBody className="p-6">
                  <h3 className="text-xl font-bold mb-4">Categories</h3>
                  <ul className="space-y-2">
                    {categories.map((category) => (
                      <li
                        key={category.name}
                        className="flex justify-between items-center"
                      >
                        <a
                          href="#"
                          className="text-gray-600 hover:text-primary"
                        >
                          {category.name}
                        </a>
                        <span className="text-gray-400 text-sm">
                          ({category.count})
                        </span>
                      </li>
                    ))}
                  </ul>
                </CardBody>
              </Card>

              {/* Featured Posts */}
              <Card>
                <CardBody className="p-6">
                  <h3 className="text-xl font-bold mb-4">Popular Posts</h3>
                  <div className="space-y-4">
                    {blogPosts.slice(0, 3).map((post) => (
                      <div key={post.id} className="flex gap-4">
                        <img
                          src={post.image}
                          alt={post.title}
                          className="w-20 h-20 object-cover rounded"
                        />
                        <div>
                          <h4 className="font-medium mb-1">{post.title}</h4>
                          <span className="text-sm text-gray-500">
                            {post.date}
                          </span>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardBody>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
