using System;
using System.Threading.Tasks;

namespace c_sharp_parallel_async_programming
{
    class Program
    {
        static void Main(string[] args)
        {
            Parallel.Invoke(() => DoWork(), () => DoSomeOtherWork());
        }

        public static void DoWork()
        {

            for (int i = 0; i < 10; i++)
            {
                Console.WriteLine($"Doing work {i}");
            }
        }

        public static void DoSomeOtherWork()
        {
            for (int i = 0; i < 10; i++)
            {
                Console.WriteLine($"Doing Some other work {i}");
            }
        }
    }
}
