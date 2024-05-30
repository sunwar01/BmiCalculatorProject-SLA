FROM mcr.microsoft.com/dotnet/aspnet:8.0 AS base
WORKDIR /app
EXPOSE 80
EXPOSE 443



FROM mcr.microsoft.com/dotnet/sdk:8.0 AS build
WORKDIR /src
COPY ["BmiCalculatorAPI-SLA/BmiCalculatorAPI-SLA.csproj", "BmiCalculatorAPI-SLA/"]
RUN dotnet restore "BmiCalculatorAPI-SLA/BmiCalculatorAPI-SLA.csproj"
COPY . .
WORKDIR "/src/BmiCalculatorAPI-SLA"
RUN dotnet build "BmiCalculatorAPI-SLA.csproj" -c Release -o /app/build

FROM build AS publish
RUN dotnet publish "BmiCalculatorAPI-SLA.csproj" -c Release -o /app/publish /p:UseAppHost=false

FROM base AS final
WORKDIR /app



COPY --from=publish /app/publish .
ENTRYPOINT ["dotnet", "BmiCalculatorAPI-SLA.dll"]
