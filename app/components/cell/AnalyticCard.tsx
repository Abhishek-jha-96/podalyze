import type { IAnalyticProps } from "~/constants/interfaces";
import { Badge } from "../ui/badge";
import { Card, CardContent } from "../ui/card";


export default function AnalyticCard({title, genre, sentiment, avg_time}: IAnalyticProps) {
  return (
    <div className="max-w-2xl mx-auto p-4">
      <Card className="border-2 border-black rounded-2xl bg-white">
        <CardContent className="space-y-4">
          <div className="flex flex-row md:col gap-6">
            {/* Left side - Image */}
            <div className="flex-shrink-0">
              <div className="relative w-52 h-32 rounded-lg overflow-hidden">
                <img
                  src="/bg-1.png"
                  alt="Empty chairs representing pandemic social distancing"
                  className="object-cover"
                />
              </div>
            </div>

            {/* Right side - Title */}
            <div className="flex-1 w-fit">  {/* this w-fit not working?? */}
              <h2 className="text-2xl font-bold text-red-500 mb-2">{title}</h2>
              <div className="p-2 pt-4 border-t-2 ">
                    {/* Genre and Sentiment */}
                    <div className="flex flex-wrap gap-4 items-center">
                        <div className="flex items-center gap-2">
                        <span className="text-gray-500 font-medium">Genre :</span>
                        <Badge variant="outline" className="bg-white border-gray-400 rounded-lg px-3 py-1">
                            {genre}
                        </Badge>
                        </div>

                        <div className="flex items-center gap-2">
                        <span className="text-gray-500 font-medium">Sentiment :</span>
                        <Badge variant="outline" className="bg-white border-gray-400 rounded-lg px-3 py-1">
                            {sentiment}
                        </Badge>
                        </div>
                    </div>

                    {/* Expected Watch Time */}
                    <div className="flex items-center gap-2 pt-4">
                        <span className="text-gray-600 font-medium text-lg">Expected Watch Time:</span>
                        <span className="text-red-500 font-bold text-xl">{avg_time}min</span>
                    </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
