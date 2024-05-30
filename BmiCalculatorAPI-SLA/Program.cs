using BmiCalculatorAPI_SLA;
using BmiCalculatorAPI_SLA.Models;

var builder = WebApplication.CreateBuilder(args);

// Add services to the container.
// Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();

var app = builder.Build();

// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}

app.UseHttpsRedirection();


app.MapGet("/measurements", () =>
    {
        DatabaseService dbService = new DatabaseService();
        return Results.Ok(dbService.GetMeasurements());
        
    })
    .WithName("measurements")
    .WithOpenApi();


app.MapPost("/measurements", (BMIMeasurement measurement) =>
{
    DatabaseService dbService = new DatabaseService();
    dbService.SaveMeasurements(measurement);
    return Results.Created($"/measurements/{measurement.Id}", measurement);
});

app.Run();